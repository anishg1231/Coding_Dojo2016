# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-10-01 20:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('poke', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='poke',
            name='poke',
            field=models.IntegerField(),
        ),
    ]
