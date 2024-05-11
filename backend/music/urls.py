from django.urls import path
from . import views
from .views import GetPostMusic

urlpatterns = [
    path('get-post-music/', GetPostMusic.as_view(), name='get-profile'),

]
