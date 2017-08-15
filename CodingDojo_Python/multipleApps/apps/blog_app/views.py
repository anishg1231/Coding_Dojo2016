from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return HttpResponse("placeholder to later display all the list of blogs")

def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")

def create(request):
    if request.method == "POST":
        print "*" * 50
        print request.POST
        print request.method
        print request.POST['name']
        print request.POST['desc']
        request.session['name'] = "test"
        print "*" * 50
        response = ("Create new blog")
        return redirect("/", response)
    else:
        return redirect("/")


def show(request, blog_id):
    print blog_id
    return HttpResponse("placeholder to display blog {}".format(blog_id))

def edit(request, blog_id):
    return HttpResponse("placeholder to display edit {}".format(blog_id))

def delete(request, blog_id):
    return redirect('/blogs')
