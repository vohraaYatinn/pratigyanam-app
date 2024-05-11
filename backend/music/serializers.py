from rest_framework import serializers

from music.models import MusicAudio, MusicCategory


class MusicAudioSerializer(serializers.ModelSerializer):

    class Meta:
        model = MusicAudio
        fields = "__all__"


class MusicCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicCategory
        fields = '__all__'


class MusicAudioCategorySerializer(serializers.ModelSerializer):
    categories = MusicCategorySerializer(many=True, read_only=True)

    class Meta:
        model = MusicAudio
        fields = '_all__'
