from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

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

    @staticmethod
    def post(request):
        try:
            data = request.data
            user_id = data.get('userId')
            track_id = data.get('trackId')
            CustomManager.post_user_favourite(user_id, track_id)

            return Response({"result": data, "message": AccountMessages.SUCCESS}, 200)
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
            data = CustomManager.get_user_favourite(user_id)
            serialized_data = UserFavouritesSerializer(data, many=True).data
            return Response({"result": serialized_data, "message": AccountMessages.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)



