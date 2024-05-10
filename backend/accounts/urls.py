from django.urls import path
from . import views
from .views import GetProfileData

urlpatterns = [
    path('get-profile/',  GetProfileData.as_view(), name='get-profile'),

]
