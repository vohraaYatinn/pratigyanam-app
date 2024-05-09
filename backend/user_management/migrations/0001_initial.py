# Generated by Django 5.0.4 on 2024-05-07 08:28

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=20, null=True)),
                ('status', models.CharField(default='active', max_length=20)),
                ('role', models.CharField(default='customer', max_length=20)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'db_table': 'user_details',
                'managed': True,
            },
        ),
    ]