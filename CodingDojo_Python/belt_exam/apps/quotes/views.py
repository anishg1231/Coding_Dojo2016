from django.shortcuts import render, HttpResponse
from .models import User,Quotes,Favorite
from django.contrib import auth
from django.contrib import messages
from django.contrib.auth.views import logout
from django.shortcuts import redirect
# Create your views here.
def index(request):
    return render(request, 'quotes/index.html')

def login(request):
    result = User.objects.validateLogin(request)
    if result[0] == False:
        for message in result[1]:
            messages.add_message(request, messages.ERROR, message)
        return redirect('/')
    request.session['user_id'] = result[1].id
    request.session['user_name'] = result[1].user_name
    return redirect('/quotes')

def register(request):
    result = User.objects.validateReg(request)
    if result[0] == False:
        for message in result[1]:
            messages.add_message(request, messages.ERROR, message)
    else:
        messages.add_message(request, messages.ERROR, 'Registered Complete')
    return redirect('/')


def quotes(request):
    my_favorites = Favorite.objects.filter(User_id=User.objects.get(id=request.session['user_id']))
    fav_ids = my_favorites.values_list('Quotes_id', flat=True)
    other_quotes = Quotes.objects.all().exclude(id__in = fav_ids)
    context ={
    'quotes': other_quotes,
    'myquotes': my_favorites
    }

    # Quotes.objects.all().exclude( id = Favorite.objects.filter( user_id = request. session['user_id'], Quotes_id = Quotes.id))
    # Quotes.objects.all().filter(Quotes.id != Favorite.Quotes_id)

    # quote_list = Quotes.objects.get(id=id)quote_list.delete()

    return render(request, 'quotes/quotes.html', context)


def new(request):
    return render(request,'quotes/quotes.html')

def create(request):
    if len(request.POST['quoted_by']) < 3:
        messages.add_message(request, messages.ERROR, 'Quoted by: More than 3 characters')
    if len(request.POST['messages']) < 10:
        messages.add_message(request, messages.ERROR, 'Message: More than 10 characters')
        return redirect('/quotes')
    Quotes.objects.create(quoted_by=request.POST['quoted_by'], messages=request.POST['messages'], User_id= User.objects.get(id=request.session['user_id']) )
    return redirect('/quotes')

def favorite(request,quote_id):
    Favorite.objects.create(Quotes_id=Quotes.objects.get(id=quote_id), User_id= User.objects.get(id=request.session['user_id']) )
    return redirect('/quotes')

def destroy(request,id):
    Favorite.objects.get(id=id).delete()
    return redirect('/quotes')

def show(request, id):
    context = {
    'quote': Quotes.objects.get(id=id)
    }
    return render(request, 'quotes/show.html', context )

def logout(request):
    request.session.clear()
    return redirect('/')
