from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from .manager import CustomManager


class coinsManagement(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            CustomManager.coins_management_handling(data)
            return Response({"result":data, "message": "New Group Created"}, 200)
        except Exception as err:
            return Response(str(err), 500)


