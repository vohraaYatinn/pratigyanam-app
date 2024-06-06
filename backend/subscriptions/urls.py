from django.urls import path
from . import views
from .views import AddGetSubscriptions, BuySubscriptionByUser, EditSubscriptionAdmin

urlpatterns = [
    path('get-post-subscription/', AddGetSubscriptions.as_view(), name='get-post-subscription'),
    path('buy-subscription/', BuySubscriptionByUser.as_view(), name='buy-subscription'),
    path('fetch-all-subscription-admin/', BuySubscriptionByUser.as_view(), name='fetch-all-subscription-admin'),
    path('edit-subscription-admin/', EditSubscriptionAdmin.as_view(), name='edit-subscription-admin'),

]
