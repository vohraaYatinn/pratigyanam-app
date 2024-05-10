from django.db import models

from user_management.models import UserDetails


# Create your models here.

class MusicTrack(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    duration = models.DurationField()
    release_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



class UserFavorites(models.Model):
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, related_name='user_fav')
    track = models.ForeignKey(MusicTrack, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)


class RecentLib(models.Model):
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, related_name='user_lib')
    track = models.ForeignKey(MusicTrack, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)
