from django.contrib import admin

# Register your models here.
from subscriptions.models import SubscriptionPlan

admin.site.register(SubscriptionPlan)