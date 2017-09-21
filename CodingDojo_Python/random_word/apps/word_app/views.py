from django.shortcuts import render, HttpResponse, redirect
import random
import string

def random_word(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for x in range(size))

# Create your views here.
def index(request):
    try:
        request.session['count']
    except KeyError:
        request.session['count'] = 0

    return render(request, 'word_app/index.html')

def generate(request):
    request.session['count'] += 1
    request.session['word'] = random_word(14)
    return redirect('/')

def reset(request):
    del request.session['count']
    del request.session['word']
    return redirect('/')
