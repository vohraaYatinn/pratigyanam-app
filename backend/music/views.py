from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from music.manager import MusicManager


class GetPostMusic(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            MusicManager.post_new_music(data)
            return Response({"result": data, "message": "Welcome"}, 200)
        except Exception as err:
            return Response(str(err), 500)


