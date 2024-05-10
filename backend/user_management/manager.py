from user_management.models import UserDetails

class UserManager:
    @staticmethod
    def check_if_admin_exists(email):
        check_login = UserDetails.objects.filter(email=email).exists()
        return check_login



