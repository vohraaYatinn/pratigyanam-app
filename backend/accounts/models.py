from django.db import models

from music.models import MusicTrack
from user_management.models import UserDetails


class SubscriptionPlan(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.CharField(max_length=20)  # e.g., monthly, yearly
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



class UserPlaylist(models.Model):
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, related_name='user_play')
    playlist_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class PlaylistTrack(models.Model):
    playlist = models.ForeignKey(UserPlaylist, on_delete=models.CASCADE)
    track = models.ForeignKey(MusicTrack, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)
