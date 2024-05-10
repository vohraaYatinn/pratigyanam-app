from django.db import transaction

from accounts.models import Profile, UserPreferences
from user_management.constants import ProfileEditType, UserMessages
from user_management.models import UserDetails


class UserManager:
    @staticmethod
    def check_if_admin_exists(email):
        check_login = UserDetails.objects.filter(email=email).exists()
        return check_login

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
        existing_email = UserDetails.objects.filter(email=email)
        existing_phn = UserDetails.objects.filter(phone=phone_number)

        if existing_phn:
            raise Exception("User with same phone number exists")
        if existing_email:
            raise Exception("User with same email number exists")
        with transaction.atomic():
            user_data = UserDetails.objects.create(email=email, phone=phone_number, password = password)
            Profile.objects.create(name=full_name, user=user_data, gender=gender, date_of_birth=date_of_birth)
            UserPreferences.objects.create(user=user_data, gender=audio_gender, language=language)


    @staticmethod
    def edit_profile_details(data):
        full_name = data.get('fullName', None)
        email = data.get('email', None)
        phone_number = data.get('phoneNumber', None)
        password = data.get('password', None)
        gender = data.get('gender', None)
        audio_gender = data.get('audioGender', None)
        date_of_birth = data.get('dateOfBirth', None)
        language = data.get('language', None)
        edit_type = data.get('editType', None)
        user_id = data.get('userId')

        if type == ProfileEditType.PROFILE:
            Profile.objects.get(user_id=user_id).select_related('user')

        if type == ProfileEditType.PREFERENCE:
            UserPreferences.objects.get(user_id=user_id)

        else:
            raise Exception(UserMessages.SOMETHING_WENT_WRONG)










