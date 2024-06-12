from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from user_management.custom_permissions import CheckAuthUser
from user_management.manager import UserManager
from user_management.models import deviceLoginCheck
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
            user_data, token = UserManager.signup_new_user(data)
            serialized_data = UserDetailsWithProfileAndPreferencesSerializer(user_data).data
            return Response({"result": serialized_data, "message": "Welcome", "token":token}, 200)
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

class singleDeviceLoginCheck(APIView):
    permission_classes = [CheckAuthUser]
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            details = UserManager.single_device_login(request, data)
            return Response({"result": "success", "message": "Welcome"}, 200)
        except Exception as err:
            if str(err) == "logout":
                return Response(str(err), 403)
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
                check_prev = deviceLoginCheck.objects.filter(user=user)
                device_id = data.get("deviceId", None)

                if check_prev:
                    check_prev[0].json_token = token
                    check_prev[0].device_id = device_id
                    check_prev[0].save()
                else:
                    deviceLoginCheck.objects.create(user=user, json_token=token, device_id=device_id)
            return Response({"result": "success", "login_check": login_check,"token":token, "user": serialized_data}, 200)
        except Exception as err:
            return Response(str(err), 500)


