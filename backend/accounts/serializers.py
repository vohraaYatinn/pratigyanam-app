from rest_framework import serializers

from accounts.models import Profile


class ProfileDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = "__all__"