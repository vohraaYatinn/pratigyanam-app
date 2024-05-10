from music.models import MusicAudio


class MusicManager:
    @staticmethod
    def post_new_music(data):
        title = data.get('title')
        artist = data.get('artist')
        genre = data.get('genre')
        duration = data.get('duration')
        release_date = data.get('releaseDate')
        language = data.get('language')
        gender = data.get('gender')
        path = data.get('path')



