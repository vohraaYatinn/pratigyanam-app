from rest_framework import serializers

from music.models import MusicAudio


class MusicAudioSerializer(serializers.ModelSerializer):

    class Meta:
        model = MusicAudio
        fields = "__all__"