from accounts.models import Profile, UserFavorites, RecentMusic


class CustomManager:

    @staticmethod
    def check_if_admin_exists(email):
        # check_login = UsersDetails.objects.filter(email=email).exists()
        return True

    @staticmethod
    def get_user_profile_data(user_id):
        profile_data = Profile.objects.filter()
        return profile_data

    @staticmethod
    def get_user_favourite(user_id):
        favourites_data = UserFavorites.objects.filter(user_id=user_id).select_related('user', 'track')
        return favourites_data

    @staticmethod
    def post_user_favourite(user_id, track_id):
        existing_fav = UserFavorites.objects.filter(user_id=user_id, track_id=track_id)
        if existing_fav:
            raise Exception("Already added in Favourites")

        UserFavorites.objects.create(user_id=user_id, track_id=track_id)

    @staticmethod
    def get_user_recent(user_id):
        favourites_data = RecentMusic.objects.filter(user_id=user_id, status="A").select_related('user', 'track')
        return favourites_data

    @staticmethod
    def post_user_recent(user_id, track_id):
        existing_recent = RecentMusic.objects.filter(user_id=user_id, track_id=track_id, status="A")
        if existing_recent:
            existing_recent.update(status="I")
        UserFavorites.objects.create(user_id=user_id, track_id=track_id)
