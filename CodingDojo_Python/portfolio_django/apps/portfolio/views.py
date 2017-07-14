from django.shortcuts import render

def index(request):
    return render(request, 'portifolio/index.html')

def testimonials(request):
    return render(request, 'portifolio/testimonials.html')
# Create your views here.
