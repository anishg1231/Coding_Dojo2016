from __future__ import unicode_literals

from django.db import models

# Create your models here.
# OUR MANAGER (S)!

class UserManager(models.Manager):
    def login(self, postData):
        print ("Running a login function!")
        print ("If successful login occurs, maybe return {'theuser':user} where user is a user object?")
        print ("If unsuccessful, maybe return { 'errors': ['Login unsuccessful']}")
        return ("I will be future login method made by coding dojo students!")

    def register(self,postData):
        print ("Register a user name")
        print ("If successful, maybe return {'theruser':user} where user is a user object?")
        print ("If unsuccessful, do something like this? return {'errors': ['User first name to short', 'last name too short']}")
        pass

class User(models.Model):
      first_name = models.CharField(max_length=45)
      last_name = models.CharField(max_length=45)
      password = models.CharField(max_length=100)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)
      # *************************
      # Connect an instance of UserManager to our User model overwriting
      # the old hidden objects key with a new one with extra properties!!!
      objects = UserManager()
