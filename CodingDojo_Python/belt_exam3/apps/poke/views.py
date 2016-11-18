from django.shortcuts import render
from .models import User,Poke
from django.contrib import auth
from django.contrib import messages
from django.contrib.auth.views import logout
from django.shortcuts import redirect
# Create your views here.

def index(request):
    return render(request, 'poke/index.html')

def login(request):
    result = User.objects.validateLogin(request)
    if result[0] == False:
        for message in result[1]:
            messages.add_message(request, messages.ERROR, message)
        return redirect('/')
    request.session['user_id'] = result[1].id
    request.session['email'] = result[1].email
    return redirect('/dashboard')

def register(request):
    result = User.objects.validateReg(request)
    if result[0] == False:
        for message in result[1]:
            messages.add_message(request, messages.ERROR, message)
    else:
        messages.add_message(request, messages.ERROR, 'Registered Complete')
    return redirect('/')

def dashboard(request):
    context = {
        'users': User.objects.all(),
        'pokes': Poke.objects.filter(poker=User.objects.get (id = request.session['user_id']))
    }
    return render(request, 'poke/dashboard.html', context)

def new(request):
    return render(request,'poke/dashboard.html')

def create(request,id):
    Poke.objects.create(pokee=User.objects.get(id=id), poker= User.objects.get(id=request.session['user_id']) )

    return redirect('/dashboard')
# // get the length of how many pokes the pokee poked
def logout(request):
    request.session.clear()
    return redirect('/')
