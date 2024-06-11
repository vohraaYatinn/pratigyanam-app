from django.urls import path
from . import views
from .views import GetProfileData, UserFavouriteMusic, UserRecentMusic, CheckUserFavouriteOrNot, adminDashboard, \
    adminRefreshToken, LoginUsingPhoneNumber, verifyOtpPhoneNumber, fetchPaymentDetails, paymentVerifyCheck

urlpatterns = [
    path('get-profile/',  GetProfileData.as_view(), name='get-profile'),
    path('user-favourite-music/', UserFavouriteMusic.as_view(), name='user-favourite-music'),
    path('user-recent-music/', UserRecentMusic.as_view(), name='user-recent-music'),
    path('is-music-user-fav/', CheckUserFavouriteOrNot.as_view(), name='user-recent-music'),
    path('admin-dashboard/', adminDashboard.as_view(), name='admin-dashboard'),
    path('get-refresh-token/', adminRefreshToken.as_view(), name='get-refresh-token'),
    path('login-using-phone-number/', LoginUsingPhoneNumber.as_view(), name='login-using-phone-number'),
    path('verify-otp/', verifyOtpPhoneNumber.as_view(), name='verify-otp-phone-number'),
    path(r'payment-order-fetch/', fetchPaymentDetails.as_view(), name="payment-order-fetch"),
    path(r'confirm-payment/', paymentVerifyCheck.as_view(), name="payment-verify-check"),
]
