from django.db.models import Q

from music.models import MusicAudio, MusicCategoryMapping


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
        name = data.get('name',None)
        search_text = data.get('searchText', None)
        query = Q()
        if genre:
            query &= Q(music__genre=genre)

        if language:
            query &= Q(music__language=language)

        if category:
            query &= Q(music__category=category)

        if name:
            query &= Q(music_title=name)

        if search_text:
            query &= Q(category__type__icontains=search_text) | Q(music__title__icontains=search_text)

        return MusicCategoryMapping.objects.filter(query).select_related('music', 'category')









