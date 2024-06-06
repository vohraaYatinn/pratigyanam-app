from django.urls import path
from . import views
from .views import userManagement, NewUserSignup, EditProfileDetails, signInUser

urlpatterns = [
    path('sign-in-email/', signInUser.as_view(), name='sign-in-email'),
    path('phone-otp-verify/', userManagement.as_view(), name='login'),
    path('sign-up/', NewUserSignup.as_view(), name='sign-up'),
    path('edit-profile/', EditProfileDetails.as_view(), name='edit-profile'),
]
