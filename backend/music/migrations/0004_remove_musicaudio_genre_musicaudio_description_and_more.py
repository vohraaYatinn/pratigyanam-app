# Generated by Django 5.0.4 on 2024-05-12 09:39

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0003_alter_musicaudio_path'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='musicaudio',
            name='genre',
        ),
        migrations.AddField(
            model_name='musicaudio',
            name='description',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='musicaudio',
            name='image',
            field=models.FileField(null=True, upload_to='image_files/', validators=[django.core.validators.FileExtensionValidator(['jpg', 'jpeg', 'png', 'gif'])]),
        ),
        migrations.AlterField(
            model_name='musicaudio',
            name='artist',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='musicaudio',
            name='duration',
            field=models.DurationField(null=True),
        ),
        migrations.AlterField(
            model_name='musicaudio',
            name='release_date',
            field=models.DateField(null=True),
        ),
    ]
