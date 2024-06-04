from django.urls import path
from . import views
from .views import GetPostMusic, GetPostCategory, GetMusicById

urlpatterns = [
    path('get-post-music/', GetPostMusic.as_view(), name='get-post-music'),
    path('get-post-category/', GetPostCategory.as_view(), name='get-post-category'),
    path('get-music-by-id/', GetMusicById.as_view(), name='get-music-by-id'),

]
