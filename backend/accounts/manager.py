from accounts.models import Profile


class CustomManager:

    @staticmethod
    def check_if_admin_exists(email):
        # check_login = UsersDetails.objects.filter(email=email).exists()
        return True

    @staticmethod
    def get_user_profile_data(user_id):
        profile_data = Profile.objects.filter()
        return profile_data
