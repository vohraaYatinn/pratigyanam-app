from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from subscriptions.manager import SubscriptionManager
from subscriptions.serializers import SubscriptionSerializer
from user_management.custom_permissions import CheckAuthUser
from user_management.serializers import UserDetailsWithProfileAndPreferencesSerializer


class AddGetSubscriptions(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            SubscriptionManager.add_new_subscription(data)
            return Response({"result": data, "message": "Plan added"}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            subs_data = SubscriptionManager.get_all_subscription(data)
            serialized_data = SubscriptionSerializer(subs_data, many=True).data
            return Response({"result": serialized_data, "message": "Success"}, 200)
        except Exception as err:
            return Response(str(err), 500)
class AddGetSubscriptionsUsers(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            subs_data = SubscriptionManager.get_all_subscription_users(data)
            serialized_data = SubscriptionSerializer(subs_data, many=True).data
            return Response({"result": serialized_data, "message": "Success"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class BuySubscriptionByUser(APIView):
    permission_classes = [CheckAuthUser]
    @staticmethod
    def post(request):
        try:
            data = request.data
            user = SubscriptionManager.buy_subscription(request, data)
            serialized_data = UserDetailsWithProfileAndPreferencesSerializer(user[0]).data
            return Response({"result": data, "message": "Plan added successfully", "data":serialized_data, "success":"true"}, 200)
        except Exception as err:
            return Response(str(err), 500)



class EditSubscriptionAdmin(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            SubscriptionManager.edit_subscription_admin(data)
            return Response({"result": data, "message": "Plan Edited Successfully"}, 200)
        except Exception as err:
            return Response(str(err), 500)


