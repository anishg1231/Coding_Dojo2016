from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def login(self, postData):
        print ("Running a login function!")
        print ("If successful login occurs, maybe return {'theuser':user} where user is a user object?")
        print ("If unsuccessful, maybe return { 'errors': ['Login unsuccessful']}")
        return ("I will be future login method made by coding dojo students!")



class Email(models.Model):
    email = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()
