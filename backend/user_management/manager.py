from django.core.exceptions import ObjectDoesNotExist
from django.db import transaction
from django.db.models import Q

from accounts.models import Profile, UserPreferences
from user_management.constants import ProfileEditType, UserMessages
from user_management.models import UserDetails


class UserManager:
    @staticmethod
    def check_if_admin_exists(data):
        email = data.get('email', None)
        password = data.get('password', None)
        details = UserDetails.objects.select_related('user_profile').prefetch_related('user_preferences').get(email=email, password=password )
        return details

    @staticmethod
    def check_if_jwt_exists(data):
        details = UserDetails.objects.select_related('user_profile').prefetch_related('user_preferences').get(id=data['user_id'])
        return details


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
            Profile.objects.create(name=full_name, user=user_data, gender=gender, date_of_birth=date_of_birth)
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










