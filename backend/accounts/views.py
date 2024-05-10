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
from .serializers import ProfileDetailsSerializer


class GetProfileData(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.data
            data = CustomManager.get_user_profile_data(data)
            serialized_data = ProfileDetailsSerializer(data, many=True).data
            return Response({"result": serialized_data, "message": AccountMessages.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)



