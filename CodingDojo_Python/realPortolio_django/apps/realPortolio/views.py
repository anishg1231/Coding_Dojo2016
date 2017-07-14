from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'realPortolio/index.html')

def projects(request):
    return render(request,'realPortolio/projects.html')

def about(request):
    return render(request,'realPortolio/about.html')

def testimonials(request):
    return render(request,'realPortolio/testimonials.html')
