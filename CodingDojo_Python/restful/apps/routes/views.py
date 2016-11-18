from django.shortcuts import render,redirect
from .models import Pets

# Create your views here.
def index(request):
    context = {
    'pets': Pets.objects.all()
    }
    return render(request,'routes/index.html', context)

def new(request):
    return render(request, 'routes/new.html')

def create(request):
    Pets.objects.create(name=request.POST['name'], description=request.POST['description'], breed = request.POST['breed'])
    return redirect('/routes')

def show(request,id):
    context = {
    'pet': Pets.objects.get(id=id)
    }
    return render(request, 'routes/show.html',context)

def edit(request,id):
    context = {
    'pet': Pets.objects.get(id=id)
    }
    return render(request, 'routes/edit.html', context)

def destroy(request,id):
    Pets.objects.get(id=id).delete()
    return redirect('/routes')

def update(request,id):
    pet = Pets.objects.get(id=id)
    pet.name = request.POST['name']
    pet.description = request.POST['description']
    pet.breed = request.POST['breed']
    pet.save()
    route = '/pets/show/'+id
    return redirect('/routes')
