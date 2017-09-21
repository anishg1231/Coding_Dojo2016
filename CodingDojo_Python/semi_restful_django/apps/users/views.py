from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages

# Create your views here.
def index(request):
    context = {
        'users': User.objects.all()
    }
    return render(request, 'users/index.html', context)

def new(request):
    return render(request, 'users/create.html')

def create(request):
    if len(request.POST['first_name']) < 5:
        messages.add_message(request, messages.ERROR, 'First Name: More than 5 characters')

    if len(request.POST['last_name']) < 5:
        messages.add_message(request, messages.ERROR, 'Last Name: More than 5 characters')

    if len(request.POST['email']) < 5:
        messages.add_message(request, messages.ERROR, 'Email: More than 5 characters')

        return redirect('/users/new')

    User.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        email = request.POST['email'],
    )
    return redirect('/users')

def show(request, user_id):
    context = {
        'user': User.objects.get(id=user_id)
    }
    return render(request, 'users/show.html', context)

def edit(request, user_id):
    context = {
        'user': User.objects.get(id=user_id)
    }
    return render(request, 'users/edit.html', context)

def update(request, user_id):
    if len(request.POST['first_name']) < 5:
        messages.add_message(request, messages.ERROR, 'First Name: More than 5 characters')

    if len(request.POST['last_name']) < 5:
        messages.add_message(request, messages.ERROR, 'Last Name: More than 5 characters')

    if len(request.POST['email']) < 5:
        messages.add_message(request, messages.ERROR, 'Email: More than 5 characters')
        
        return redirect('/users/{}/edit'.format(user_id))

    user_to_update = User.objects.get(id=user_id)
    user_to_update.first_name = request.POST['first_name']
    user_to_update.last_name = request.POST['last_name']
    user_to_update.email = request.POST['email']
    user_to_update.save()
    return redirect('/users')

def destroy(request, user_id):
    User.objects.get(id=user_id).delete()
    return redirect('/users')
