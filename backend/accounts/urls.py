from django.urls import path
from . import views
from .views import coinsManagement

urlpatterns = [
    path('login/', coinsManagement.as_view(), name="users_auth"),
]
