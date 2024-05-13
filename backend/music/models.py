from django.core.validators import FileExtensionValidator
from django.db import models

from user_management.models import UserDetails


# Create your models here.


class MusicAudio(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=200, null=True)
    duration = models.DurationField(null=True)
    release_date = models.DateField(null=True)
    language = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    path = models.FileField(upload_to='mp3_files/', validators=[FileExtensionValidator(['mp3'])], null=True)
    image = models.FileField(upload_to='image_files/', validators=[FileExtensionValidator(['jpg', 'jpeg', 'png', 'gif'])], null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = "music_audio"


class MusicCategory(models.Model):
    type = models.CharField(max_length=100)
    image = models.FileField(upload_to='image_files/',
                             validators=[FileExtensionValidator(['jpg', 'jpeg', 'png', 'gif'])], null=True)

    class Meta:
        managed = True
        db_table = "music_category"


class MusicCategoryMapping(models.Model):
    category = models.ForeignKey(MusicCategory, on_delete=models.CASCADE, related_name='music_category')
    music = models.OneToOneField(MusicAudio, on_delete=models.CASCADE, related_name='music_track')

    class Meta:
        managed = True
        db_table = "music_category_mapping"

