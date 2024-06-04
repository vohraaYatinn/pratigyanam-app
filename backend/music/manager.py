from django.db import transaction
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
        category = data.get('category', None)
        existing_music = MusicAudio.objects.filter(title=title)
        if existing_music:
            raise Exception("Music with same title exists, choose a different title.")
        with(transaction.atomic()):
            music_obj = MusicAudio.objects.create(title=title, artist=artist, description=description, duration=duration, release_date=release_date,
                                  language=language, gender=gender, path=path, image=image)
            MusicCategoryMapping.objects.create(music=music_obj, category_id=category)


    @staticmethod
    def get_music(data):
        language = data.get('language', None)
        category = data.get('category', None)
        name = data.get('name', None)
        gender = data.get('gender', None)
        search_text = data.get('searchText', None)
        query = Q()

        if gender:
            query &= Q(music__gender=gender)

        if language:
            query &= Q(music__language=language)

        if category:
            query &= Q(category_id=category)

        if name:
            query &= Q(music_title=name)

        if search_text:
            query &= Q(category__type__icontains=search_text) | Q(music__title__icontains=search_text)

        return MusicCategoryMapping.objects.filter(query).select_related('music', 'category')

    @staticmethod
    def get_music_by_id(data):
        music_id = data.get('musicId')
        try:
            return MusicAudio.objects.get(id=music_id)
        except Exception as e:
            raise Exception("Audio doesn't exists")



    @staticmethod
    def post_new_category(data, request):
        cat_type = data.get('type')
        image = request.FILES.get('image', None)
        existing_music = MusicCategory.objects.filter(type=cat_type)
        if existing_music:
            raise Exception("Category with same title exists, choose a different title.")

        MusicCategory.objects.create(type=cat_type, image=image)

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









