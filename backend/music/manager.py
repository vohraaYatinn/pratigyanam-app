from django.db.models import Q

from music.models import MusicAudio


class MusicManager:
    @staticmethod
    def post_new_music(data):
        title = data.get('title')
        artist = data.get('artist')
        genre = data.get('genre')
        duration = data.get('duration')
        release_date = data.get('releaseDate')
        language = data.get('language')
        gender = data.get('gender')
        path = data.get('path')

        existing_music = MusicAudio.objects.filter(title=title)
        if existing_music:
            raise Exception("Music with same title exists, choose a different title.")

        MusicAudio.objects.create(title=title, artist=artist, genre=genre, duration=duration, release_date=release_date,
                                  language=language, gender=gender, path=path)


    @staticmethod
    def get_music(data):
        genre = data.get('genre', None)
        language = data.get('language', None)
        category = data.get('category', None)
        query = Q()
        if genre:
            query &= Q(genre=genre)

        if language:
            query &= Q(language=language)

        if category:
            query &= Q(category=category)







