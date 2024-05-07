

class MusicTrack(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    duration = models.DurationField()
    release_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        managed = True
        db_table = "user_details"

# class UserLibrary(models.Model):
#     user = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
#     track = models.ForeignKey(MusicTrack, on_delete=models.CASCADE)
#     added_at = models.DateTimeField(auto_now_add=True)
#     class Meta:
#         managed = True
#         db_table = "user_details"


class UserFavorites(models.Model):
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    track = models.ForeignKey(MusicTrack, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        managed = True
        db_table = "user_details"


class UserPlaylist(models.Model):
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    playlist_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        managed = True
        db_table = "user_details"


class PlaylistTrack(models.Model):
    playlist = models.ForeignKey(UserPlaylist, on_delete=models.CASCADE)
    track = models.ForeignKey(MusicTrack, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        managed = True
        db_table = "user_details"