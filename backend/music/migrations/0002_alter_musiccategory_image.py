# Generated by Django 5.0.4 on 2024-06-05 04:21

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='musiccategory',
            name='image',
            field=models.FileField(null=True, upload_to='image_files/', validators=[django.core.validators.FileExtensionValidator(['jpg', 'jpeg', 'png', 'gif', 'webp'])]),
        ),
    ]
