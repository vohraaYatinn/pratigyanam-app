from django.contrib import admin
from django.urls import path, include

from backend import settings
from django.conf.urls.static import static

urlpatterns = [

    path('admin/', admin.site.urls),
    path('api/v2/users/', include('user_management.urls')),

    # path('accounts/', include('accounts.urls')),
    # path('subscriptions/', include('subscriptions.urls')),
    # path('music/', include('music.urls')),
    path('api/v2/accounts/', include('accounts.urls')),
    path('api/v2/subscriptions/', include('subscriptions.urls')),
    path('api/v2/music/', include('music.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)