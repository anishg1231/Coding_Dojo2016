from django.shortcuts import render, HttpResponse
from .models import User,Trip,OtherTrip
from django.contrib import auth
from django.contrib import messages
from django.contrib.auth.views import logout
from django.shortcuts import redirect
# Create your views here.
def index(request):
    return render(request, 'travel/index.html')

def login(request):
    result = User.objects.validateLogin(request)
    if result[0] == False:
        for message in result[1]:
            messages.add_message(request, messages.ERROR, message)
        return redirect('/')
    request.session['user_id'] = result[1].id
    request.session['user_name'] = result[1].user_name
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
    my_trips = OtherTrip.objects.filter(user_id=User.objects.get(id=request.session['user_id']))
    other_trip = OtherTrip.objects.all().exclude(id__in = my_trips)
    print other_trip
    context = {
    'my_trips': my_trips,
    'other_users': Trip.objects.all()
    }

    # tav_ids = my_trips.values_list('trip_id', flat=True)
    # context ={
    # 'quotes': other_trip,
    # 'other_users': my_trips
    # }
    return render(request,'travel/dashboard.html', context)

def new(request):
    return render(request, 'travel/add.html')

def create(request):
    if len(request.POST['destination']) == 0:
        messages.add_message(request, messages.ERROR, 'no empty destination')
    if len(request.POST['description']) == 0:
        messages.add_message(request, messages.ERROR, 'no empty description')
    if len(request.POST['date_from']) == 0:
        messages.add_message(request, messages.ERROR, 'no travel date from')
    if len(request.POST['date_end']) == 0:
        messages.add_message(request, messages.ERROR, 'no travel date end')
        return redirect ('/new')

    trip = Trip.objects.create(destination=request.POST['destination'], description=request.POST['description'], travel_date_from=request.POST['date_from'], travel_date_to=request.POST['date_end'], user_id= User.objects.get(id=request.session['user_id']) )

    OtherTrip.objects.create(trip_id=Trip.objects.get(id=trip.id), user_id= User.objects.get(id=request.session['user_id']) )

    return redirect('/dashboard')

def othertrip(request,id):
    OtherTrip.objects.create(trip_id=Trip.objects.get(id=id), user_id= User.objects.get(id=request.session['user_id']) )
    return redirect('/dashboard')

def show(request,id):
    context = {
    'trip': Trip.objects.get(id=id)
    }
    return render(request, 'travel/show.html',context)


def logout(request):
    request.session.clear()
    return redirect('/')
