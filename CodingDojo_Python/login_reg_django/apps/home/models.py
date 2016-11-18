from __future__ import unicode_literals
from django.db import models
import bcrypt, re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# # Create your models here.
#
class UserManager(models.Manager):
    def validateReg(self,request):
        valid_form = True
        if len(request.POST['first_name']) == 0 or len(request.POST['last_name']) == 0 or len(request.POST['email']) == 0 or len(request.POST['password']) == 0 or len(request.POST['confirm_password']) == 0:
            valid_form = False
            request.flash('Please fill out the whole form')

        if not request.POST['first_name'].isalpha():
            valid_form = False
            request.flash('Please no special character')

        if not request.POST['last_name'].isalpha():
            valid_form = False
            request.flash('Please no special character')

        if not EMAIL_REGEX.match(request.POST['email']):
            valid_form = False
            request.flash('Please fill out email correctly')

        if len(request.POST['password']) < 8:
            valid_form = False
            request.flash('Password length needs to be 8 characters')


        if not request.POST['password'] == request.post['confirm_password']:
            valid_form = False
            request.flash('Password does not match. Try again.')

        def validateLogin(self,request)


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    pw_hash = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()




    # def validateReg(self,request):
    #     errors = self.validate_inputs(request)
    #     if len(errors) > 0:
    #         return(False, errors)
    #
    #     pw_hash = bcrypt.hashpw(request.POST['password'], bcrypt.gensalt())
    #
    #     user = self.create()
