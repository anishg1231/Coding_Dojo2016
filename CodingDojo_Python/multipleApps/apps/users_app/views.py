from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return HttpResponse("placeholder to show all users")

def register(request):
    return HttpResponse("placeholder for users to create a new user record.")

def login(request):
    return HttpResponse("placeholder for users to login")

def new(request):
    return HttpResponse("placeholder for new user")
