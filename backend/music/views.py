from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from music.manager import MusicManager
from music.serializers import MusicCategoryMappingNormalSerializer, MusicCategorySerializer, MusicAudioSerializer
from user_management.custom_permissions import CheckAuthUser


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
    permission_classes = []
    @staticmethod
    def post(request):
        try:
            data = request.data
            MusicManager.post_new_category(data, request)
            return Response({"result": "success", "message": "New Category Has been added Successfully"}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            music_data = MusicManager.get_category(data)
            serialized_data = MusicCategorySerializer(music_data, many=True).data
            return Response({"result": serialized_data, "message": "success"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class GetMusicById(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            music_data = MusicManager.get_music_by_id(data)
            serialized_data = MusicAudioSerializer(music_data).data
            return Response({"result":"success", "data": serialized_data, "message": "Success"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class deleteCategory(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            delete_music = MusicManager.delete_category(data)
            return Response({"result":"success", "message": "Success"}, 200)
        except Exception as err:
            return Response(str(err), 500)


class fetchMusicByCategory(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            required_music = MusicManager.get_music_by_category(data)
            serialized_data = MusicAudioSerializer(required_music, many=True).data
            return Response({"result":"success", "message": "Success", "data":serialized_data}, 200)
        except Exception as err:
            return Response(str(err), 500)


class deleteMusic(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            required_music = MusicManager.delete_music(data)
            return Response({"result":"success", "message": "Audio Deleted Successfully"}, 200)
        except Exception as err:
            return Response(str(err), 500)





