from django.contrib import admin
from django.urls import path, include


urlpatterns = [

    path('admin/', admin.site.urls),
    # path('accounts/', include('accounts.urls')),
    # path('subscriptions/', include('subscriptions.urls')),
    # path('music/', include('music.urls')),
]
