from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request,'realPortolio/index.html')

def projects(request):
    return render(request,'realPortolio/projects.html')

def about(request):
    return render(request,'realPortolio/about.html')

def testimonials(request):
    return render(request,'realPortolio/testimonials.html')

def create(request):
    if request.method == 'POST':
        print '*' * 10
        print request.POST
        print request.method
        print '*' * 10
        request.session['name'] = request.POST['first_name']
        return redirect('/')
    else:
        return render(request,'realPortolio/projects.html')
