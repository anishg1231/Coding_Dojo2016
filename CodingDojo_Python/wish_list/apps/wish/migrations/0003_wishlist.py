# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-27 22:01
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wish', '0002_auto_20160927_0354'),
    ]

    operations = [
        migrations.CreateModel(
            name='WishList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('List_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wish.List')),
                ('User_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wish.User')),
            ],
        ),
    ]
