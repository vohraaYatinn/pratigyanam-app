from django.db import models

from music.models import MusicAudio
from subscriptions.models import SubscriptionPlan
from user_management.models import UserDetails


class Profile(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=200)
    user = models.OneToOneField(UserDetails, on_delete=models.CASCADE, related_name='user_profile')
    gender = models.CharField(max_length=100, null=True)
    date_of_birth = models.DateField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    subscription = models.ForeignKey(SubscriptionPlan, on_delete=models.CASCADE, related_name='user_subscription', null=True)
    is_subscription_activated = models.BooleanField(default=False)

    class Meta:
        managed = True
        db_table = "profile"


class UserPreferences(models.Model):
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, related_name='user_preferences')
    gender = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = "user_preference"


class RecentMusic(models.Model):
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, related_name='user_recent')
    track = models.ForeignKey(MusicAudio, on_delete=models.CASCADE, related_name='recent_music_track')
    added_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, default="A")

    class Meta:
        managed = True
        db_table = "recent_music"


class UserFavorites(models.Model):
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, related_name='user_fav')
    track = models.ForeignKey(MusicAudio, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = True
        db_table = "user_favourite"



