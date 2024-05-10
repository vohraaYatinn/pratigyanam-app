from rest_framework.response import Response
from rest_framework.views import APIView
from user_management.manager import UserManager


class userManagement(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            UserManager.check_if_admin_exists(data)
            return Response({"result": data, "message": "New Group Created"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class NewUserSignup(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            UserManager.signup_new_user(data)
            return Response({"result": data, "message": "Welcome"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class EditProfileDetails(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            UserManager.edit_profile_details(data)
            return Response({"result": data, "message": "Welcome"}, 200)
        except Exception as err:
            return Response(str(err), 500)


