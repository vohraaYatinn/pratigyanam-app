# Generated by Django 5.0.4 on 2024-06-10 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_management', '0004_devicelogincheck_device_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='devicelogincheck',
            name='device_id',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
