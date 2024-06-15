from django.db import transaction
from django.db.models import Q

from music.models import MusicAudio, MusicCategoryMapping, MusicCategory


class MusicManager:
    @staticmethod
    def post_new_music(data, request):
        title = data.get('name', None)
        description = data.get('description', None)
        language = data.get('language', None)
        gender = data.get('gender', None)
        audio = data.get('audio', None)
        image = data.get('image', None)
        category = data.get('category', None)
        old_music = MusicCategoryMapping.objects.filter(music__title__iexact=title, category_id=category)
        if old_music:
            raise Exception("Music title in the same category already exists")
        with(transaction.atomic()):
            music_obj = MusicAudio.objects.create(title=title, description=description,
                                  language=language, gender=gender, path=audio, image=image)
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
    def delete_category(data):
        category_id = data.get('id')
        if not category_id:
            raise Exception("Category id not provided")
        try:
            music_cat = MusicCategory.objects.get(id=category_id)
            all_music_id = MusicCategoryMapping.objects.filter(category_id=category_id).values_list("music")
            get_all_music = MusicAudio.objects.filter(id__in=all_music_id).delete()
            music_cat.delete()
        except MusicCategory.DoesNotExist:
            raise Exception("Category doesn't exists")


    @staticmethod
    def post_new_category(data, request):
        cat_type = data.get('type')
        image = data.get('image', None)
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

        return MusicCategory.objects.filter(query).exclude(type__icontains="morning").exclude(type__icontains="night")



    @staticmethod
    def get_music_by_category(data):
        category_id = data.get('category')
        if not category_id:
            raise Exception("Category id not provided")
        try:
            all_music_id = MusicCategoryMapping.objects.filter(category_id=category_id).values_list("music")
            get_all_music = MusicAudio.objects.filter(id__in=all_music_id)
            return get_all_music
        except MusicCategory.DoesNotExist:
            raise Exception("Category doesn't exists")

    @staticmethod
    def delete_music(data):
        music_id = data.get('id')
        if not music_id:
            raise Exception("Music id not provided")
        try:
            get_all_music = MusicAudio.objects.get(id=music_id).delete()
        except MusicCategory.DoesNotExist:
            raise Exception("Category doesn't exists")




    @staticmethod
    def get_search_music(data):
        language = data.get('language', None)
        gender = data.get('gender', None)
        search_text = data.get('searchText', None)
        query = Q()

        if gender:
            query &= Q(gender=gender)

        if language:
            query &= Q(language=language)

        if search_text:
            query &= Q(title__icontains=search_text)

        category = MusicCategory.objects.filter(type__icontains=search_text)
        music = MusicAudio.objects.filter(query)
        return category, music
