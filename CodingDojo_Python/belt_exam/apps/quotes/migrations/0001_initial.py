# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-28 20:14
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Quotes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quotes_by', models.CharField(max_length=255)),
                ('messages', models.TextField(max_length=1000)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.AddField(
            model_name='quotes',
            name='User_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quotes.User'),
        ),
        migrations.AddField(
            model_name='favorite',
            name='Quotes_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quotes.Quotes'),
        ),
        migrations.AddField(
            model_name='favorite',
            name='User_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quotes.User'),
        ),
    ]
