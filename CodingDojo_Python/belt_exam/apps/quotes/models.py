from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
import bcrypt
# Create your models here.

class UserManager(models.Manager):
    def validateReg(self, request):
        errors = []
        if len(request.POST['name']) == 0:
            errors.append('Please include a name.')
        if len(request.POST['alias']) == 0:
            errors.append('Please include an alias.')
        if len(request.POST['email']) == 0:
            errors.append('Please include an email.')
        if len(request.POST['password']) < 8:
            errors.append('Needs to be at least 8 characters')
        if request.POST['password'] != request.POST['confirm_password']:
            errors.append('Password does not match.')
        if len(errors) > 0:
            return (False,errors)
        else:
            hashed = bcrypt.hashpw(request.POST['password'].encode(encoding='utf-8'), bcrypt.gensalt())
            user= self.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],user_name=request.POST['user_name'], password = hashed)
            return(True,user)

    def validateLogin(self, request):
        errors = []
        if len(request.POST['user_name']) == 0:
            errors.append('Please include a UserName.')
        if len(request.POST['password']) < 8:
            errors.append('Needs to be at least 8 characters')
        if len(errors) > 0:
            return(False, errors)
        else:
            try:
                user = User.objects.get(user_name=request.POST['user_name'])
                if bcrypt.hashpw(request.POST['password'].encode(encoding='utf-8'), user.password.encode(encoding='utf-8')) == user.password.encode(encoding='utf-8'):
                    return (True, user)
                else:
                    errors.append('No user found...')
            except ObjectDoesNotExist:
                errors.append('No user found...')
        if len(errors) > 0:
            return(False, errors)

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Quotes(models.Model):
    quoted_by = models.CharField(max_length=255)
    messages = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    User_id = models.ForeignKey(User)

class Favorite(models.Model):
    User_id = models.ForeignKey(User)
    Quotes_id = models.ForeignKey(Quotes)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
