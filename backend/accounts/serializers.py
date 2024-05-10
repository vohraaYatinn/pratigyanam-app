from rest_framework import serializers

from accounts.models import Profile, UserFavorites
from music.serializers import MusicAudioSerializer
from user_management.serializers import UserDetailsSerializer


class ProfileDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = "__all__"



class UserFavouritesSerializer(serializers.ModelSerializer):
    user = UserDetailsSerializer()
    track = MusicAudioSerializer()

    class Meta:
        model = UserFavorites
        fields = "__all__"


class UserRecentSerializer(serializers.ModelSerializer):
    user = UserDetailsSerializer()
    track = MusicAudioSerializer()

    class Meta:
        model = UserFavorites
        fields = "__all__"