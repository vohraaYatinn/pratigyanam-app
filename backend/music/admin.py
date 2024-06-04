from django.contrib import admin

# Register your models here.
from music.models import MusicAudio, MusicCategory, MusicCategoryMapping

admin.site.register(MusicAudio)
admin.site.register(MusicCategory)
admin.site.register(MusicCategoryMapping)