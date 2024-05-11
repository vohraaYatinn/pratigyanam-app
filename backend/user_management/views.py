from rest_framework.response import Response
from rest_framework.views import APIView
from user_management.manager import UserManager
from user_management.serializers import UserDetailsWithProfileAndPreferencesSerializer


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
    @staticmethod
    def post(request):
        try:
            data = request.data
            details = UserManager.edit_profile_details(data)
            serialized_data = UserDetailsWithProfileAndPreferencesSerializer(details).data
            return Response({"result": serialized_data, "message": "Welcome"}, 200)
        except Exception as err:
            return Response(str(err), 500)


