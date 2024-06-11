import random
from django.utils import timezone

import jwt
from django.db.models import Prefetch

from accounts.models import Profile, UserFavorites, RecentMusic, otpVerify
from backend import settings
from music.models import MusicCategory, MusicCategoryMapping
from user_management.manager import UserManager
from user_management.models import UserDetails
import razorpay
import json



class CustomManager:

    @staticmethod
    def check_if_admin_exists(email):
        # check_login = UsersDetails.objects.filter(email=email).exists()
        return True

    @staticmethod
    def get_user_profile_data(user_id):
        profile_data = Profile.objects.filter(user_id=user_id).select_related('user')
        return profile_data

    @staticmethod
    def get_user_favourite(user_id):
        user_favorites_with_categories = UserFavorites.objects.filter(user_id=user_id, is_active="A").select_related('track',
                                                                                                      'user').prefetch_related(
            Prefetch('track__music_track', queryset=MusicCategoryMapping.objects.select_related('category').all(),
                     to_attr='categories')).order_by('-added_at')

        return user_favorites_with_categories

    @staticmethod
    def add_remove_user_favourite(user_id, track_id):
        try:
            existing_fav = UserFavorites.objects.get(user_id=user_id, track_id=track_id)
            if existing_fav.is_active == "A":
                existing_fav.is_active = "I"
                message = "Successfully removed from favourites"
            else:
                existing_fav.is_active = "A"
                message = "Successfully added to favourites"
            existing_fav.save()
            return message
        except:
            UserFavorites.objects.create(user_id=user_id, track_id=track_id)
            return "Successfully added to favourites"

    @staticmethod
    def get_user_recent(user_id):
        favourites_data = RecentMusic.objects.filter(user_id=user_id, status = "A").select_related('music', 'user').prefetch_related(
            Prefetch('music__music_track', queryset=MusicCategoryMapping.objects.select_related('category').all(),
                     to_attr='categories')).order_by('-added_at')
        return favourites_data

    @staticmethod
    def post_user_recent(user_id, track_id):
        existing_recent = RecentMusic.objects.filter(user_id=user_id, music_id=track_id, status="A")
        if existing_recent:
            existing_recent.update(status="I")
        RecentMusic.objects.create(user_id=user_id, music_id=track_id)


    @staticmethod
    def check_is_music_user_fav(data):
        music_id = data.get('musicId')
        user_id = data.get('userId')
        fav_music = UserFavorites.objects.filter(user_id=user_id, is_active="A", track_id=music_id)
        if fav_music:
            return 1
        else:
            return 0

    @staticmethod
    def get_admin_data(data):
        music_id = data.get('musicId')
        user_id = data.get('userId')
        all_customer = Profile.objects.filter(user__role="customer")
        total_user_count = all_customer.count()
        male_user = all_customer.filter(gender="M").count()
        female_user = all_customer.filter(gender="F").count()
        monthly_sub = all_customer.filter(subscription__name="Monthly").count()
        yearly_sub = all_customer.filter(subscription__name="Yearly").count()
        stats = {
            "total_user_count": total_user_count,
            "male_user": male_user,
            "female_user": female_user,
            "monthly_sub": monthly_sub,
            "yearly_sub": yearly_sub,
        }
        return stats


    @staticmethod
    def set_otp_for_user(request, data):
        phoneNumber = data.get("phone", False)
        otp = random.randint(22121,99892)
        if not phoneNumber:
            raise Exception("Phone number is required")
        user = UserDetails.objects.filter(phone=phoneNumber)
        if user:
            check_user_otp = otpVerify.objects.filter(phone=phoneNumber)
            if check_user_otp:
                check_user_otp[0].otp=otp
                check_user_otp[0].save()
            else:
                otpVerify.objects.create(phone=phoneNumber, otp=otp)
            return True

        else:
            return "new login"

    @staticmethod
    def set_otp_verify(request, data):
        phoneNumber = data.get("phone", False)
        firstDigit = data.get("firstDigit", False)
        secondDigit = data.get("secondDigit", False)
        thirdDigit = data.get("thirdDigit", False)
        fourthDigit = data.get("fourthDigit", False)
        fifthDigit = data.get("fifthDigit", False)
        otp = firstDigit + secondDigit + thirdDigit + fourthDigit + fifthDigit
        check_otp = otpVerify.objects.filter(phone=phoneNumber, otp=otp)
        if not check_otp:
            raise Exception("otp entered is Invalid")
        check_login = UserDetails.objects.filter(phone=phoneNumber).select_related('user_profile').prefetch_related('user_preferences')
        user_profile = check_login[0].user_profile
        if user_profile:
            effective_till = user_profile.sub_active_till
            today = timezone.now()
            if effective_till and today > effective_till and user_profile.subscription:
                user_profile.is_subscription_activated = False
                user_profile.subscription = None
                user_profile.save()
                check_login = UserDetails.objects.filter(phone=phoneNumber).select_related(
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
    def get_refresh_token(request, data):
        token = request.headers.get("jwtToken", False)
        role = data.get("role", False)
        if not token or not role:
            raise Exception("Role not found")
        try:
            decoded_payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
            check_login = False
            if decoded_payload['id']:
                check_login = UserDetails.objects.filter(id=decoded_payload['id']).select_related(
                    'user_profile').prefetch_related('user_preferences')
            if check_login:
                token = UserManager.generate_jwt({
                    'id': check_login[0].id,
                    'email': check_login[0].email,
                    'role': check_login[0].role,
                })
                return check_login[0], True, token
            return False, False, False
        except Exception:
            return False, False, False

    @staticmethod
    def fetch_payment_razorpay(request, data):
        try:
            amount = data.get("amount")
            client = razorpay.Client(auth=(settings.RAZOR_KEY_ID, settings.RAZOR_KEY_SECRET))
            DATA = {
                "amount": int(float(amount)) * 100,
                "currency": "INR",
                "receipt": "receipt#1",
            }
            req_order = client.order.create(data=DATA)
            return req_order
        except:
            raise Exception("Something went wrong")

    @staticmethod
    def verify_payment_check(request, data):
        try:
            data = data['data']
            json_string = json.loads(data)
            razorpay_order_id = json_string['response'].get("razorpay_order_id")
            razorpay_payment_id = json_string['response'].get("razorpay_payment_id")
            razorpay_signature = json_string['response'].get("razorpay_signature")
            client = razorpay.Client(auth=(settings.RAZOR_KEY_ID, settings.RAZOR_KEY_SECRET))
            try:
                verify_payment = client.utility.verify_payment_signature({
                    'razorpay_order_id': razorpay_order_id,
                    'razorpay_payment_id': razorpay_payment_id,
                    'razorpay_signature': razorpay_signature
                })
            except:
                verify_payment = False
            return verify_payment
        except:
            raise Exception("Something went wrong")
