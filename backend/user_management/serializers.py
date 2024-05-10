from rest_framework import serializers

from accounts.models import Profile, UserPreferences
from user_management.models import UserDetails


class UserDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDetails
        fields = "__all__"


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


# Serializer for UserPreferences model
class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = "__all__"


class UserDetailsWithProfileAndPreferencesSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer()  # Nested serializer for user_profile
    user_preferences = UserPreferencesSerializer(many=True)

    class Meta:
        model = UserDetails
        fields = "__all__"