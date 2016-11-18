from django.shortcuts import render,redirect
from.models import Courses
# Create your views here.
def index(request):
    context = {
        'courses': Course.objects.all()
    }
    return render(request,'course/index.html', context)

def course(request):
    Course.objects.create(title = request.POST['title'], description = request.POST['description'])
    return redirect('/')

def show(request, id):
    context = {
        'course': Course.objects.get(id=id)
    }
    return render(request,'course/destroy.html',context)

def destroy(request,id):
    Course.objects.get(id=id).delete()
    return redirect('/')
