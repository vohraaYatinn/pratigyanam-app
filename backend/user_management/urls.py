from django.urls import path
from . import views
from .views import userManagement

urlpatterns = [
    path('phone-otp-verify/', userManagement.as_view(), name='login'),
]
