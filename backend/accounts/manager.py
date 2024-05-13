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
        user_favorites_with_categories = UserFavorites.objects.filter(user_id=user_id).select_related('track',
                                                                                                      'user').prefetch_related(
            Prefetch('track__music_track', queryset=MusicCategoryMapping.objects.select_related('category').all(),
                     to_attr='categories'))

        return user_favorites_with_categories

    @staticmethod
    def post_user_favourite(user_id, track_id):
        existing_fav = UserFavorites.objects.filter(user_id=user_id, track_id=track_id)
        if existing_fav:
            raise Exception("Already added in Favourites")

        UserFavorites.objects.create(user_id=user_id, track_id=track_id)

    @staticmethod
    def get_user_recent(user_id):
        favourites_data = RecentMusic.objects.filter(user_id=user_id, status = "A").select_related('music', 'user').prefetch_related(
            Prefetch('music__music_track', queryset=MusicCategoryMapping.objects.select_related('category').all(),
                     to_attr='categories'))
        return favourites_data

    @staticmethod
    def post_user_recent(user_id, track_id):
        existing_recent = RecentMusic.objects.filter(user_id=user_id, music_id=track_id, status="A")
        if existing_recent:
            existing_recent.update(status="I")
        RecentMusic.objects.create(user_id=user_id, music_id=track_id)
