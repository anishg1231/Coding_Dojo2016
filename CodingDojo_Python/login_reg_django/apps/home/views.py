from django.shortcuts import render,redirect
from .models import User

# Create your views here.
def index(request):
    return render(request,'home/index.html')

def register(request):
    

def success(request):
    return render(request,'home/success.html')
