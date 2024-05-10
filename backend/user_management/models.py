from django.db import models
from django.utils import timezone


class UserDetails(models.Model):
    email = models.EmailField(null=True)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=20, null=True)
    status = models.CharField(default="active", max_length=20)
    role = models.CharField(default="customer", max_length=20)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        managed = True
        db_table = "user_details"

