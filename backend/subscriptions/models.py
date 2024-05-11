from django.db import models

from user_management.models import UserDetails


class SubscriptionPlan(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField( null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.CharField(max_length=20)  # e.g., monthly, yearly
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    type = models.CharField(max_length=100, null=True)
    status = models.CharField(max_length=50, default="A")

    class Meta:
        managed = True
        db_table = "subscriptions"
