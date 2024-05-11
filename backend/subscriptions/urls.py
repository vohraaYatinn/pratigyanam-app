from django.urls import path
from . import views
from .views import AddGetSubscriptions

urlpatterns = [
    path('get-post-subscription/', AddGetSubscriptions.as_view(), name='get-post-subscription'),

]
