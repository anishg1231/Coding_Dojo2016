from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def validatePassword(self, request):
        password = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        return(password)

class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(max_length=1000)
    password = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
    review = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    User_id = models.ForeignKey(User)
    Book_id = models.ForeignKey(Book)
