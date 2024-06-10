from django.db import models
from django.utils import timezone


class UserDetails(models.Model):
    email = models.EmailField(null=True)
    phone = models.CharField(max_length=20, null=True)
    password = models.CharField(max_length=20, null=True)
    status = models.CharField(default="active", max_length=20)
    role = models.CharField(default="customer", max_length=20)
    referral_code = models.CharField( max_length=10)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        managed = True
        db_table = "user_details"

class deviceLoginCheck(models.Model):
    user = models.OneToOneField(UserDetails, on_delete=models.CASCADE, related_name='user_details_device')
    json_token = models.CharField(max_length=255)
    device_id = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = "user_device_login"

