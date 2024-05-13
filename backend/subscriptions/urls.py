from django.urls import path
from . import views
from .views import AddGetSubscriptions, BuySubscriptionByUser

urlpatterns = [
    path('get-post-subscription/', AddGetSubscriptions.as_view(), name='get-post-subscription'),
    path('buy-subscription/', BuySubscriptionByUser.as_view(), name='buy-subscription'),

]
