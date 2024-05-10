from rest_framework import serializers

from user_management.models import UserDetails


class UserDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDetails
        fields = "__all__"