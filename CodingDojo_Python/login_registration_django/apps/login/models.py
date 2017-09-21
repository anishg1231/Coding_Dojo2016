from __future__ import unicode_literals

from django.db import models

import re

import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')


class UserManager(models.Manager):
    def validate_reg(self, post_data):
        errors = []

        if len(post_data['first_name']) < 3 or len(post_data['last_name']) < 3:
            errors.append("name fields must be at least 3 characters")

        if len(post_data['password']) < 8:
            errors.append("Password field must be at least 8 characters")

        if post_data['password'] != post_data['confirm_password']:
            errors.append("Password does not match")

        if len(User.objects.filter(email=post_data['email'])) > 0:
            errors.append("email already in use")

        if not re.match(EMAIL_REGEX, post_data['email']):
            errors.append("invalid email")

        if not errors:

            hashed = bcrypt.hashpw((post_data['password'].encode()), bcrypt.gensalt(5))

            new_user = self.create(
                first_name = post_data['first_name'],
                last_name = post_data['last_name'],
                email = post_data['email'],
                password = hashed
            )
            return new_user
        return errors

    def validate_login(self, post_data):
        errors = []
         # check DB for post_data['email']
        if len(self.filter(email=post_data['email'])) > 0:
            user = self.filter(email=post_data['email'])[0]

        # check this user's password
        if not bcrypt.checkpw(post_data['password'].encode(), user.password.encode()):
            errors.append('email/password incorrect')

        else:
            errors.append('email/password incorrect')

        if errors:
            return errors
        return user
        

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.EmailField(max_length = 100)
    password = models.CharField(max_length = 16)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()



    def __str__(self):
        return self.email
