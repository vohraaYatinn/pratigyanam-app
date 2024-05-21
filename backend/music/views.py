from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from music.manager import MusicManager
from music.serializers import MusicCategoryMappingNormalSerializer, MusicCategorySerializer, MusicAudioSerializer


class GetPostMusic(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            MusicManager.post_new_music(data, request)
            return Response({"result": data, "message": "Success"}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            music_data = MusicManager.get_music(data)
            serialized_data = MusicCategoryMappingNormalSerializer(music_data, many=True).data
            return Response({"result": serialized_data, "message": "Success"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class GetPostCategory(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            MusicManager.post_new_category(data, request)
            return Response({"result": data, "message": "Success"}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            music_data = MusicManager.get_category(data)
            serialized_data = MusicCategorySerializer(music_data, many=True).data
            return Response({"result": serialized_data, "message": "Success"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class GetMusicById(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            music_data = MusicManager.get_music_by_id(data)
            serialized_data = MusicAudioSerializer(music_data, many=True).data
            return Response({"result": serialized_data, "message": "Success"}, 200)
        except Exception as err:
            return Response(str(err), 500)





