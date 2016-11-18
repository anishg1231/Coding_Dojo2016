from django.shortcuts import render,redirect, HttpResponse
from django.contrib import auth
from. models import User,Book,Review
# Create your views here.
def index(request):
    return render(request, 'book/index.html')

def register(request):
    password = User.objects.validatePassword(request.POST['password'])

    user = User.objects.create(first_name= request.POST['first_name'], last_name = request.POST['last_name'],email = request.POST['email'], password = password),
    return render(response, 'books/index.html')
    print '*' * 10
    print user
    print '*' * 10

def login(request):
    context = {

    }
    return render(request,'book/books.html')

def add(request):
    Book.objects.create(title = request.POST['title'], author = request.POST['author']),
    return render('/')

def review(request):
    context = {
        'books': book.objects.all()
    }
    return redirect('/')
