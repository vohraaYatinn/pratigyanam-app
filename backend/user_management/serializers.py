from rest_framework import serializers

from accounts.models import Profile, UserPreferences
from subscriptions.serializers import SubscriptionSerializer
from user_management.models import UserDetails


class UserDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDetails
        fields = "__all__"


class UserProfileSerializer(serializers.ModelSerializer):
    subscription = SubscriptionSerializer()

    class Meta:
        model = Profile
        fields = "__all__"


# Serializer for UserPreferences model
class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = "__all__"


class UserDetailsWithProfileAndPreferencesSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer()
    user_preferences = UserPreferencesSerializer(many=True)

    class Meta:
        model = UserDetails
        fields = "__all__"