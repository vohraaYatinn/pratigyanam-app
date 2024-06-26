import random

from django.db import transaction
from django.db.models import Q

from accounts.models import Profile, UserPreferences, otpVerify
from subscriptions.models import SubscriptionPlan
from user_management.constants import ProfileEditType, UserMessages
from user_management.models import UserDetails, deviceLoginCheck
import jwt
from django.conf import settings
from datetime import datetime, timedelta
from django.utils import timezone
import requests


class UserManager:
    @staticmethod
    def check_if_admin_exists(data):
        # check_login = UserDetails.objects.filter(email=email)
        email = data.get('email', None)
        try:
            details = UserDetails.objects.select_related('user_profile').prefetch_related('user_preferences').get(email=email)

            return details
        except Exception:
            raise Exception("User does not exists!")

    @staticmethod
    def signup_new_user(data):
        full_name = data.get('fullName', None)
        email = data.get('email', None)
        phone_number = data.get('phoneNumber', None)
        password = data.get('password', None)
        gender = data.get('gender', None)
        audio_gender = data.get('audioGender', None)
        date_of_birth = data.get('dateOfBirth', None)
        language = data.get('language', None)
        referral = data.get('referral', None)
        deviceId = data.get('deviceId', None)
        query = Q()
        if referral:
            referral_check = UserDetails.objects.filter(referral_code=referral)
            if len(referral_check) == 0:
                raise Exception("Referral code does not exists!")

        if email:
            query |= Q(email=email)
        if phone_number:
            query |= Q(phone=phone_number)
        # existing_email = UserDetails.objects.filter(email=email)
        # existing_phn = UserDetails.objects.filter(phone=phone_number)
        existing_value = UserDetails.objects.filter(query)

        if existing_value:
            raise Exception("User with same phone/email exists")
        # if existing_email:
        #     raise Exception("User with same email number exists")
        with transaction.atomic():
            user_data = UserDetails.objects.create(email=email, phone=phone_number, password = password, referral_code=email[0:2]+str(random.randint(20,90))+password[0:2])
            subscription = SubscriptionPlan.objects.filter(name="TRIAL")
            if not subscription:
                raise Exception("There is a issue with subscription plan")
            seven_days_from_now = datetime.now() + timedelta(days=subscription[0].duration)
            profile = Profile.objects.create(name=full_name, user=user_data, gender=gender, date_of_birth=date_of_birth, subscription=subscription[0], sub_active_till=seven_days_from_now)
            if referral:
                profile.applied_referral_code = referral
                profile.save()
            UserPreferences.objects.create(user=user_data, gender=audio_gender, language=language)
            user = UserDetails.objects.select_related('user_profile').prefetch_related('user_preferences').get(id=user_data.id)
            token = UserManager.generate_jwt({
                'id': user.id,
                'email': user.email,
                'role': user.role,
            })
            otp = random.randint(12321,98993)
            otpVerify.objects.create(phone=phone_number, otp=otp)

            url = (
                "https://www.fast2sms.com/dev/bulkV2?authorization=qPHJG9kF0ACvby7lVLgu8QND4xRTmjpKiIWU3BMr5sfzohXeY2vdcRNstkUbM5Ioz1g6mYGl4fj3uqDE"
                "&route=q"
                f"&message=Your%20OTP%20for%20login%20in%20Pratigyanam%20app%20is%20{otp}.%20Please%20use%20this%20code%20within%2010%20minutes%20to%20complete%20your%20login.%20If%20you%20did%20not%20request%20this,%20please%20ignore%20this%20message."
                "&flash=0"
                f"&numbers={phone_number}"
            )
            response = requests.get(url)
            if response.status_code != 200:
                raise Exception("We are currently experiencing issues with sending OTP")
            if deviceId:
                deviceLoginCheck.objects.create(user=user, json_token=token, device_id=deviceId)
        return user, token

    @staticmethod
    def edit_profile_details(request, data):
        full_name = data.get('fullName', None)
        email = data.get('email', None)
        phone_number = data.get('phoneNumber', None)
        password = data.get('password', None)
        gender = data.get('gender', None)
        audio_gender = data.get('audioGender', None)
        date_of_birth = data.get('dob', None)
        language = data.get('language', None)
        edit_type = data.get('editType', None)
        user_id = request.user.id


        existing_email = UserDetails.objects.filter(email=email).exclude(id=user_id)
        if existing_email:
            raise Exception("exists")
        if edit_type == ProfileEditType.PROFILE:
            profile_data = Profile.objects.select_related('user').get(user_id=user_id)
            profile_data.name = full_name
            profile_data.gender = gender
            profile_data.date_of_birth = date_of_birth
            profile_data.user.email = email
            profile_data.save()

        elif edit_type == ProfileEditType.PREFERENCE:
            preference_data = UserPreferences.objects.get(user_id=user_id)
            preference_data.gender = audio_gender
            preference_data.language = language
            preference_data.save()

        else:
            raise Exception(UserMessages.SOMETHING_WENT_WRONG)
        return UserDetails.objects.select_related('user_profile').prefetch_related('user_preferences').get(
            id=user_id)

    @staticmethod
    def generate_jwt(payload):
        # payload['exp'] = datetime.utcnow() + timedelta(seconds=settings.JWT_EXP_DELTA_SECONDS)
        token = jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
        return token

    @staticmethod
    def decode_jwt(token):
        try:
            decoded_payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
            return decoded_payload
        except jwt.ExpiredSignatureError:
            return None
        except jwt.InvalidTokenError:
            return None

    @staticmethod
    def check_sign_in_user(data):
        email = data.get('email', None)
        password = data.get('password', None)
        check_login = UserDetails.objects.filter(email=email, password=password).select_related('user_profile').prefetch_related('user_preferences')
        if check_login[0].status == "inactive":
            raise Exception("Inactive user")
        user_profile = check_login[0].user_profile
        if user_profile:
            effective_till = user_profile.sub_active_till
            today = timezone.now()
            if effective_till and today > effective_till and user_profile.subscription:
                user_profile.is_subscription_activated = False
                user_profile.subscription = None
                user_profile.save()
                check_login = UserDetails.objects.filter(email=email, password=password).select_related(
                    'user_profile').prefetch_related('user_preferences')

        token = ""
        if check_login:
            token = UserManager.generate_jwt({
                'id': check_login[0].id,
                'email': check_login[0].email,
                'role': check_login[0].role,
            })
            return check_login[0], True, token
        return False, False, False



    @staticmethod
    def single_device_login(request, data):
        token = request.headers.get("jwtToken", False)
        user = request.user.id
        device_id = data.get("deviceId", False)
        device_check = deviceLoginCheck.objects.filter(user=user)
        if not device_check:
            deviceLoginCheck.objects.create(user=user, json_token=token, device_id=device_id)
            return True
        if device_check[0].device_id != device_id:
            raise Exception("logout")
