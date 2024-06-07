from django.db import transaction
from django.db.models import Q

from accounts.models import Profile, UserPreferences
from subscriptions.models import SubscriptionPlan
from user_management.constants import ProfileEditType, UserMessages
from user_management.models import UserDetails
import jwt
from django.conf import settings
from datetime import datetime, timedelta
from django.utils import timezone


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
        query = Q()
        if email:
            query |= Q(email=email)
        if phone_number:
            query |= Q(phone=phone_number)
        # existing_email = UserDetails.objects.filter(email=email)
        # existing_phn = UserDetails.objects.filter(phone=phone_number)
        existing_value = UserDetails.objects.filter(query)

        if existing_value:
            raise Exception("User with same phone/email number exists")
        # if existing_email:
        #     raise Exception("User with same email number exists")
        with transaction.atomic():
            user_data = UserDetails.objects.create(email=email, phone=phone_number, password = password)
            subscription = SubscriptionPlan.objects.filter(name="TRIAL")
            if not subscription:
                raise Exception("There is a issue with subscription plan")
            seven_days_from_now = datetime.now() + timedelta(days=subscription[0].duration)
            Profile.objects.create(name=full_name, user=user_data, gender=gender, date_of_birth=date_of_birth, subscription=subscription[0], sub_active_till=seven_days_from_now)
            UserPreferences.objects.create(user=user_data, gender=audio_gender, language=language)
        return UserDetails.objects.select_related('user_profile').prefetch_related('user_preferences').get(id=user_data.id)

    @staticmethod
    def edit_profile_details(data):
        full_name = data.get('fullName', None)
        email = data.get('email', None)
        phone_number = data.get('phoneNumber', None)
        password = data.get('password', None)
        gender = data.get('gender', None)
        audio_gender = data.get('audioGender', None)
        date_of_birth = data.get('dob', None)
        language = data.get('language', None)
        edit_type = data.get('editType', None)
        user_id = data.get('userId')


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
            preference_data.audio_gender = audio_gender
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
