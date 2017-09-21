from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return HttpResponse ("placeholder for all surveys")

def new(request):
    return HttpResponse ("placeholder for new surveys")

def create(request):
    response = "Create new surveys"
    return redirect('/surveys', response)

def show(request, survey_id):
    print survey_id
    return HttpResponse("placeholder for show survey {}".format(survey_id))

def edit(request, survey_id):
    return HttpResponse("placeholder for edit survey {}".format(survey_id))

def delete(request, survey_id):
    return redirect('/surveys')
