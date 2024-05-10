from django.contrib import admin

# Register your models here.
from music.models import MusicAudio, MusicCategory

admin.site.register(MusicAudio)
admin.site.register(MusicCategory)