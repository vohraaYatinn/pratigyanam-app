from accounts.models import UsersDetails

class UserManager:

    @staticmethod
    def check_if_admin_exists(email):
        check_login = UsersDetails.objects.filter(email=email).exists()
        return check_login



