from django.urls import path
from . import views
from .views import GetPostMusic, GetPostCategory, GetMusicById, deleteCategory, fetchMusicByCategory, deleteMusic

urlpatterns = [
    path('get-post-music/', GetPostMusic.as_view(), name='get-post-music'),
    path('get-post-category/', GetPostCategory.as_view(), name='get-post-category'),
    path('get-music-by-id/', GetMusicById.as_view(), name='get-music-by-id'),
    path('delete-categories/', deleteCategory.as_view(), name='delete-categories'),
    path('fetch-music-by-category/', fetchMusicByCategory.as_view(), name='fetch-music-by-category'),
    path('delete-music/', deleteMusic.as_view(), name='delete-music'),
    path('search-music/', deleteMusic.as_view(), name='delete-music')

]
