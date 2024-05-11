from rest_framework import serializers

from music.models import MusicAudio, MusicCategory, MusicCategoryMapping


class MusicAudioSerializer(serializers.ModelSerializer):

    class Meta:
        model = MusicAudio
        fields = "__all__"


class MusicCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicCategory
        fields = '__all__'


class MusicCategoryMappingSerializer(serializers.ModelSerializer):
    category = MusicCategorySerializer()

    class Meta:
        model = MusicCategoryMapping
        fields = '__all__'


class MusicAudioCategorySerializer(serializers.ModelSerializer):
    categories = MusicCategoryMappingSerializer(many=True)

    class Meta:
        model = MusicAudio
        fields = '__all__'
