from django.contrib import admin

# Register your models here.
from user_management.models import UserDetails

admin.site.register(UserDetails)
