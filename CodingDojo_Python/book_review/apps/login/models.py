from __future__ import unicode_literals

from django.db import models

import bcrypt

import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

# Create your models here.

class UserManager(models.Manager):
    def validate_reg(self, post_data):
        errors = []
        if len(post_data['name']) < 4 or len(post_data['alias']) < 4:
            errors.append("Name or Alias needs to be longer than 4 characters")

        if len(post_data['password']) < 8:
            errors.append("Password needs to longer than 8 characters")

        if post_data['password'] != post_data['confirm_pw']:
            errors.append("Password does not match")

        if len(User.objects.filter(email = post_data['email'])) > 0:
            errors.append("Email already in use")

        if not re.match(EMAIL_REGEX, post_data['email']):
            errors.append("Invalid Email")

        if not errors:
            hashed = bcrypt.hashpw((post_data['password'].encode()), bcrypt.gensalt(8))

            new_user = self.create(
                name = post_data['name'],
                alias = post_data['alias'],
                email = post_data['email'],
                password = hashed
            )
            return new_user
        return errors

    def validate_login(self, post_data):
        errors = []
        # check DB for post_data['email']
        if len(self.filter(email=post_data['email'])) > 0:
            # check this user's password
            user = self.filter(email=post_data['email'])[0]
            if not bcrypt.checkpw(post_data['password'].encode(), user.password.encode()):
                errors.append('email/password incorrect')
        else:
            errors.append('email/password incorrect')

        if errors:
            return errors
        return user

class User(models.Model):
    name = models.CharField(max_length = 255)
    alias = models.CharField(max_length = 255)
    email = models.EmailField(unique = True)
    password = models.CharField(max_length = 16)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()

    def __str__(self):
        return self.email
