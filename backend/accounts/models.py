from django.db import models

from music.models import MusicAudio
from user_management.models import UserDetails


class Profile(models.Model):
    name = models.CharField(max_length=200)
    user = models.OneToOneField(UserDetails, on_delete=models.CASCADE, related_name='user_profile')
    gender = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

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



