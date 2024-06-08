from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from user_management.custom_permissions import CheckAuthUser
from user_management.manager import UserManager
from user_management.serializers import UserDetailsWithProfileAndPreferencesSerializer, UserDetailsSerializer


class userManagement(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            user_data = UserManager.check_if_admin_exists(data)
            serialized_data = UserDetailsWithProfileAndPreferencesSerializer(user_data).data
            return Response({"result": serialized_data, "message": "New Group Created"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class NewUserSignup(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            user_data = UserManager.signup_new_user(data)
            serialized_data = UserDetailsWithProfileAndPreferencesSerializer(user_data).data
            return Response({"result": serialized_data, "message": "Welcome"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class EditProfileDetails(APIView):
    permission_classes = [CheckAuthUser]
    @staticmethod
    def post(request):
        try:
            data = request.data
            details = UserManager.edit_profile_details(request, data)
            serialized_data = UserDetailsWithProfileAndPreferencesSerializer(details).data
            return Response({"result": serialized_data, "message": "Welcome"}, 200)
        except Exception as err:
            return Response(str(err), 500)

class signInUser(APIView):
    permission_classes = []
    @staticmethod
    def post(request):
        try:
            data = request.data
            user, login_check, token = UserManager.check_sign_in_user(data)
            serialized_data = False
            if token:
                serialized_data = UserDetailsWithProfileAndPreferencesSerializer(user).data

            return Response({"result": "success", "login_check": login_check,"token":token, "user": serialized_data}, 200)
        except Exception as err:
            return Response(str(err), 500)


