from django.db.models import Q

from music.models import MusicAudio, MusicCategoryMapping, MusicCategory


class MusicManager:
    @staticmethod
    def post_new_music(data, request):
        title = data.get('title', None)
        artist = data.get('artist', None)
        description = data.get('description', None)
        duration = data.get('duration', None)
        release_date = data.get('releaseDate', None)
        language = data.get('language', None)
        gender = data.get('gender', None)
        path = request.FILES.get('path', None)
        image = request.FILES.get('image', None)

        existing_music = MusicAudio.objects.filter(title=title)
        if existing_music:
            raise Exception("Music with same title exists, choose a different title.")

        MusicAudio.objects.create(title=title, artist=artist, description=description, duration=duration, release_date=release_date,
                                  language=language, gender=gender, path=path, image=image)


    @staticmethod
    def get_music(data):
        genre = data.get('genre', None)
        language = data.get('language', None)
        category = data.get('category', None)
        name = data.get('name', None)
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




    @staticmethod
    def post_new_category(data):
        cat_type = data.get('type')

        existing_music = MusicCategory.objects.filter(type=cat_type)
        if existing_music:
            raise Exception("Category with same title exists, choose a different title.")

        MusicCategory.objects.create(type=cat_type)

    @staticmethod
    def get_category(data):
        cat_type = data.get('type', None)
        search_text = data.get('searchText', None)
        query = Q()
        if cat_type:
            query &= Q(type=cat_type)
        if search_text:
            query &= Q(type__icontains=search_text)

        return MusicCategory.objects.filter(query)









