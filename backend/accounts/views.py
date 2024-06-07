from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from user_management.custom_permissions import CheckAuthUser
from user_management.serializers import UserDetailsWithProfileAndPreferencesSerializer
from .constants import AccountMessages
from .manager import CustomManager

#
# class coinsManagement(APIView):
#     @staticmethod
#     def post(request):
#         try:
#             data = request.data
#             CustomManager.coins_management_handling(data)
#             return Response({"result":data, "message": "New Group Created"}, 200)
#         except Exception as err:
#             return Response(str(err), 500)
from .serializers import ProfileDetailsSerializer, UserFavouritesSerializer, UserRecentSerializer


class GetProfileData(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            data = CustomManager.get_user_profile_data(data)
            serialized_data = ProfileDetailsSerializer(data, many=True).data
            return Response({"result": serialized_data, "message": AccountMessages.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class UserFavouriteMusic(APIView):
    permission_classes = [CheckAuthUser]

    @staticmethod
    def post(request):
        try:
            data = request.data
            user_id = request.user.id
            track_id = data.get('trackId')

            message = CustomManager.add_remove_user_favourite(user_id, track_id)

            return Response({"message": message, "status": AccountMessages.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            user_id = data.get('userId')
            data = CustomManager.get_user_favourite(user_id)
            serialized_data = UserFavouritesSerializer(data, many=True).data
            return Response({"result": serialized_data, "message": AccountMessages.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class UserRecentMusic(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            user_id = data.get('userId')
            data = CustomManager.get_user_recent(user_id)
            serialized_data = UserRecentSerializer(data, many=True).data
            return Response({"result": serialized_data, "message": AccountMessages.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def post(request):
        try:
            data = request.data
            user_id = data.get('userId')
            track_id = data.get('trackId')
            CustomManager.post_user_recent(user_id, track_id)
            return Response({"result": data, "message": AccountMessages.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class CheckUserFavouriteOrNot(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            is_fav = CustomManager.check_is_music_user_fav(data)
            return Response({"result": is_fav, "message": AccountMessages.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class adminDashboard(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            admin_stats_data = CustomManager.get_admin_data(data)
            return Response({"result": "success", "message": AccountMessages.SUCCESS, "data":admin_stats_data}, 200)
        except Exception as err:
            return Response(str(err), 500)

class adminRefreshToken(APIView):

    @staticmethod
    def post(request):
        try:
            data = request.data
            user, login_check, token = CustomManager.get_refresh_token(request , data)
            serialized_data = False
            if token:
                serialized_data = UserDetailsWithProfileAndPreferencesSerializer(user).data
            return Response({"result": "success", "login_check": login_check,"token":token, "user": serialized_data}, 200)

        except Exception as err:
            return Response(str(err), 500)

