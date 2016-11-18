from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
import bcrypt

# Create your models here.

class UserManager(models.Manager):
    def validateReg(self, request):
        errors = []
        if len(request.POST['first_name']) == 0:
            errors.append('Please include a first name.')
        if len(request.POST['last_name']) == 0:
            errors.append('Please include a last name.')
        if len(request.POST['user_name']) == 0:
            errors.append('Please include a UserName.')
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
                print user.password
                print request.POST['password']
                print bcrypt.hashpw(request.POST['password'].encode(encoding='utf-8'), user.password.encode(encoding='utf-8'))
                if bcrypt.hashpw(request.POST['password'].encode(encoding='utf-8'), user.password.encode(encoding='utf-8')) == user.password.encode(encoding='utf-8'):
                    print("It Matches!")
                    return (True, user)
                else:
                    print("It Does not Match :(")
                    errors.append('No user found...')
            except ObjectDoesNotExist:
                errors.append('No user found...')
        if len(errors) > 0:
            return(False, errors)
            print result


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class List(models.Model):
    item = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)
    User_id = models.ForeignKey(User)

class WishList(models.Model):
    User_id = models.ForeignKey(User)
    List_id = models.ForeignKey(List)
