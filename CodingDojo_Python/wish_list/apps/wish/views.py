from django.shortcuts import render, HttpResponse
from django.contrib import auth
from .models import User,List,WishList
from django.urls import reverse
from django.contrib import messages
from django.contrib.auth.views import logout
from django.shortcuts import redirect

def login(request):
    result = User.objects.validateLogin(request)
    print(result)
    if result[0] == False:
        for message in result[1]:
            messages.add_message(request, messages.ERROR, message)
        return redirect('/')
    request.session['user_id'] = result[1].id
    request.session['user_name'] = result[1].user_name
    return redirect('/dashboard')

def register(request):
    result = User.objects.validateReg(request)
    print(result)
    if result[0] == False:
        for message in result[1]:
            messages.add_message(request, messages.ERROR, message)
    else:
        print result
        messages.add_message(request, messages.ERROR, 'Successful registered')
    return redirect('/')

######################################

def index(request):
    return render(request, 'wish/index.html')

def dashboard(request):
    context ={
    'lists': List.objects.all(),
    'wishes': WishList.objects.all()
    }
    return render(request, 'wish/dashboard.html', context)

def new(request):
    return render(request,'wish/create_item.html')

def create(request):
    if len(request.POST['item']) < 2:
        messages.add_message(request, messages.ERROR, 'no empty entires')
        return redirect('/new')

    List.objects.create(item=request.POST['item'], User_id= User.objects.get(id=request.session['user_id']) )

    other_wish=WishList.objects.create(List_id=request.POST['item'], User_id= User.objects.get(id=request.session['user_id']))
    print other_wish
    return redirect('/dashboard')

def destroy(request,id):
    List.objects.get(id=id).delete()
    return redirect('/dashboard')

def show(request,id):
    context = {
    'lists': List.objects.get(id=id)
    }
    return render(request,'wish/show.html', context)

def wishlist(request):
    # context = {
    # 'wishes' = WishList.objects.get()
    # }
    return redirect('/dashboard')

def logout(request):
    # logout(request)
    request.session.clear()
    return redirect('/')
