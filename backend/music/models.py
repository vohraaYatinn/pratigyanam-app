from django.db import models

from user_management.models import UserDetails


# Create your models here.


class MusicAudio(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    duration = models.DurationField()
    release_date = models.DateField()
    language = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = "music_audio"


class MusicCategory(models.Model):
    type = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = "music_category"


class MusicCategoryMapping(models.Model):
    category = models.ForeignKey(MusicCategory, on_delete=models.CASCADE, related_name='music_category')
    music = models.ForeignKey(MusicAudio, on_delete=models.CASCADE, related_name='music_track')

    class Meta:
        managed = True
        db_table = "music_category_mapping"

