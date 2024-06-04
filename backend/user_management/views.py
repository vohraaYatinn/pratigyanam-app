from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
from rest_framework.views import APIView
from user_management.manager import UserManager
from user_management.serializers import UserDetailsWithProfileAndPreferencesSerializer
import jwt


class userManagement(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            user_data = UserManager.check_if_admin_exists(data)
            serialized_data = UserDetailsWithProfileAndPreferencesSerializer(user_data).data
            payload = {
                'user_id': serialized_data['id']
            }
            token = jwt.encode(payload, 'secretKeyRight34', algorithm='HS256')
            return Response({"check": "success", "result": serialized_data, "message": "New Group Created", "token":token}, 200)
        except ObjectDoesNotExist:
            return Response({
                "check": "failure",
                "message": "Email or Password is invalid"
            }, 200)
        except Exception as err:
            return Response(str(err), 500)

class jwtCheck(APIView):
    @staticmethod
    def post(request):
        try:
            token = request.headers.get("jwtToken")
            jwt_token = jwt.decode(token, "secretKeyRight34", algorithms=['HS256'])
            if jwt_token['user_id']:
                user_data = UserManager.check_if_jwt_exists(jwt_token)
            else:
                return Response({
                    "check": "failure",
                    "message": "Email or Password is invalid"
                }, 200)
            serialized_data = UserDetailsWithProfileAndPreferencesSerializer(user_data).data
            payload = {
                'user_id': serialized_data['id']
            }
            token = jwt.encode(payload, 'secretKeyRight34', algorithm='HS256')
            return Response({"check": "success", "result": serialized_data, "message": "New Group Created", "token":token}, 200)
        except ObjectDoesNotExist:
            return Response({
                "check": "failure",
                "message": "Email or Password is invalid"
            }, 200)
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


