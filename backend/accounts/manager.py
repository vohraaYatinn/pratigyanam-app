import jwt
from django.db.models import Prefetch

from accounts.models import Profile, UserFavorites, RecentMusic
from backend import settings
from music.models import MusicCategory, MusicCategoryMapping
from user_management.manager import UserManager
from user_management.models import UserDetails


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
            existing_fav = UserFavorites.objects.get(user_id=user_id, track_id=track_id)
            if existing_fav.is_active == "A":
                existing_fav.is_active = "I"
                message = "Successfully removed from favourites"
            else:
                existing_fav.is_active = "A"
                message = "Successfully added to favourites"
            existing_fav.save()
            return message
        except:
            UserFavorites.objects.create(user_id=user_id, track_id=track_id)
            return "Successfully added to favourites"

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

    @staticmethod
    def get_admin_data(data):
        music_id = data.get('musicId')
        user_id = data.get('userId')
        all_customer = Profile.objects.filter(user__role="customer")
        total_user_count = all_customer.count()
        male_user = all_customer.filter(gender="M").count()
        female_user = all_customer.filter(gender="F").count()
        monthly_sub = all_customer.filter(subscription__name="Monthly").count()
        yearly_sub = all_customer.filter(subscription__name="Yearly").count()
        stats = {
            "total_user_count": total_user_count,
            "male_user": male_user,
            "female_user": female_user,
            "monthly_sub": monthly_sub,
            "yearly_sub": yearly_sub,
        }
        return stats


    @staticmethod
    def get_refresh_token(request, data):
        token = request.headers.get("jwtToken", False)
        role = data.get("role", False)
        if not token or not role:
            raise Exception("Role not found")
        try:
            decoded_payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
            check_login = False
            if decoded_payload['id']:
                check_login = UserDetails.objects.filter(id=decoded_payload['id']).select_related(
                    'user_profile').prefetch_related('user_preferences')
            if check_login:
                token = UserManager.generate_jwt({
                    'id': check_login[0].id,
                    'email': check_login[0].email,
                    'role': check_login[0].role,
                })
                return check_login[0], True, token
            return False, False, False
        except Exception:
            return False, False, False