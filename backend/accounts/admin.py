from django.contrib import admin

# from accounts.models import SubscriptionPlan
#
from accounts.models import Profile, UserFavorites, UserPreferences

admin.site.register(Profile)
admin.site.register(UserFavorites)
admin.site.register(UserPreferences)
