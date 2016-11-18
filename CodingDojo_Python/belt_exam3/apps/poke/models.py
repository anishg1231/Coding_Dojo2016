from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
import bcrypt
import re
from datetime import datetime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
# Create your models here.
class UserManager(models.Manager):
    def validateReg(self, request):
        errors = []
        if len(request.POST['name']) == 0:
            errors.append('Please include a name.')
        if len(request.POST['alias']) == 0:
            errors.append('Please include an alias.')
        if not EMAIL_REGEX.match(request.POST['email']):
            errors.append("Invalid Email")
        if len(request.POST['password']) < 8:
            errors.append('Needs to be at least 8 characters')
        if request.POST['password'] != request.POST['confirm_password']:
            errors.append('Password does not match.')
        if len(errors) > 0:
            return (False,errors)
        else:
            hashed = bcrypt.hashpw(request.POST['password'].encode(encoding='utf-8'), bcrypt.gensalt())
            user= self.create(name=request.POST['name'],alias=request.POST['alias'],email=request.POST['email'], password = hashed)
            return(True,user)

    def validateLogin(self, request):
        errors = []
        if not EMAIL_REGEX.match(request.POST['email']):
            errors.append("Invalid Email")
        if len(request.POST['password']) < 8:
            errors.append('Needs to be at least 8 characters')
        else:
            try:
                user = User.objects.get(email=request.POST['email'])
                if bcrypt.hashpw(request.POST['password'].encode(encoding='utf-8'), user.password.encode(encoding='utf-8')) == user.password.encode(encoding='utf-8'):
                    return (True, user)
                else:
                    errors.append('No user found...')
            except ObjectDoesNotExist:
                errors.append('No user found...')
        if len(errors) > 0:
            return(False, errors)

class User(models.Model):
    name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Poke(models.Model):
    pokee = models.ForeignKey(User,related_name='who_was_poked')
    poker = models.ForeignKey(User,related_name='who_poked')
