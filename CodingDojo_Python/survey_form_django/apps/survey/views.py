from django.shortcuts import render, HttpResponse,redirect
import random
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

def index(request):
    return render(request,'survey/index.html')

def survey(request):
    print'='*80
    print request.POST
    print'='*80

    context = {
    "name": request.POST['name'],
    "location": request.POST['location'],
    "language": request.POST['language'],
    "comment": request.POST['comment']
    }

    if len(request.POST['email']) < 1:
        print ("Email cannot be blank!")
    else:
        print ("success!")
    # return redirect('/')
    return render(request,'survey/results.html', context)

# Create your views here.
