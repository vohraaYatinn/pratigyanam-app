from django.urls import path
from . import views
from .views import GetProfileData, UserFavouriteMusic, UserRecentMusic

urlpatterns = [
    path('get-profile/',  GetProfileData.as_view(), name='get-profile'),
    path('user-favourite-music/', UserFavouriteMusic.as_view(), name='user-favourite-music'),
    path('user-recent-music/', UserRecentMusic.as_view(), name='user-recent-music'),

]
