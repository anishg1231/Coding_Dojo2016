from django.shortcuts import render,redirect,HttpResponse
from django.core.validators import validate_email
from.models import Email
import re

# Create your views here.
# EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
EMAIL_REGEX = re.compile(r'/([^@|\s]+@[^@]+\.[^@|\s]+)/')

def index(request):
    context = {
        'emails': Email.objects.all()
    }
    return render(request,'validation/index.html',context)

def email(request):
    Email.objects.create(email = request.POST['email'])

    if EMAIL_REGEX.match(request.GET['email']):
        valid_email = True
    else:
        valid_email = False
        print '*'*10
        print('invalid email')

    return redirect('/')

def show(request, id):
    context = {
        'course': Course.objects.get(id=id)
    }
    return render(request,'email/destroy.html',context)

def remove(request):
    email.objects.get{{id=id}}.delete()

    return redirect('/')

# def view_name(request):
#     if request.method == 'POST':
#         form = form_class(request.POST)
#         if form.is_valid():
#             return HttpResponseRedirect('/thanks')
#         else:
#             messages.error(request, "Error")
#     return render(request, 'index.html', {'form':form_class()})
