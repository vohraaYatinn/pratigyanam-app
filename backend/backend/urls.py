from django.contrib import admin
from django.urls import path, include


urlpatterns = [

    path('admin/', admin.site.urls),
    path('api/v2/users/', include('user_management.urls')),

    # path('accounts/', include('accounts.urls')),
    # path('subscriptions/', include('subscriptions.urls')),
    # path('music/', include('music.urls')),
]
