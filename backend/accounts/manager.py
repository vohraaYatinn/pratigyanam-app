from django.db.models import Prefetch

from accounts.models import Profile, UserFavorites, RecentMusic
from music.models import MusicCategory, MusicCategoryMapping


class CustomManager:

    @staticmethod
    def check_if_admin_exists(email):
        # check_login = UsersDetails.objects.filter(email=email).exists()
        return True

    @staticmethod
    def get_user_profile_data(user_id):
        profile_data = Profile.objects.filter(user_id=user_id).select_related('user')
        return profile_data

    @staticmethod
    def get_user_favourite(user_id):
        user_favorites_with_categories = UserFavorites.objects.filter(user_id=user_id, is_active="A").select_related('track',
                                                                                                      'user').prefetch_related(
            Prefetch('track__music_track', queryset=MusicCategoryMapping.objects.select_related('category').all(),
                     to_attr='categories')).order_by('-added_at')

        return user_favorites_with_categories

    @staticmethod
    def add_remove_user_favourite(user_id, track_id):
        try:
            existing_fav = UserFavorites.objects.get(user_id=user_id, track_id=track_id, is_active="A")

            existing_fav.is_active = "I"
            existing_fav.save()
            return "Successfully removed from favourites"
        except:
            UserFavorites.objects.create(user_id=user_id, track_id=track_id)
            return "Successfully added from favourites"

    @staticmethod
    def get_user_recent(user_id):
        favourites_data = RecentMusic.objects.filter(user_id=user_id, status = "A").select_related('music', 'user').prefetch_related(
            Prefetch('music__music_track', queryset=MusicCategoryMapping.objects.select_related('category').all(),
                     to_attr='categories')).order_by('-added_at')
        return favourites_data

    @staticmethod
    def post_user_recent(user_id, track_id):
        existing_recent = RecentMusic.objects.filter(user_id=user_id, music_id=track_id, status="A")
        if existing_recent:
            existing_recent.update(status="I")
        RecentMusic.objects.create(user_id=user_id, music_id=track_id)


    @staticmethod
    def check_is_music_user_fav(data):
        music_id = data.get('musicId')
        user_id = data.get('userId')
        fav_music = UserFavorites.objects.filter(user_id=user_id, is_active="A", track_id=music_id)
        if fav_music:
            return 1
        else:
            return 0