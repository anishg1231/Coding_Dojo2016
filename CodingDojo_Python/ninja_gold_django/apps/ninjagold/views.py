from django.shortcuts import render,redirect
import random


def index(request):
    try:
        print request.session['num_gold']
    except:
        request.session['num_gold']=0
    return render(request,'ninjagold/index.html')

def process(request):
    request.session['random'] = random.randrange(-51,51)
    print '*' * 8
    print request.POST['buildings']
    print '*' * 8
    if request.POST['buildings'] == 'farm' :
        print 'Getting gold from farm!'
        request.session['num_gold'] +=  random.randrange(10,21)
        request.session['message'] = 'Getting gold from farm!'

    elif request.POST['buildings'] == 'cave':
        print 'Your striking Gold!'
        request.session['num_gold'] += random.randrange(5,11)
        request.session['message'] = 'Your striking gold!'

    elif request.POST['buildings'] == 'house':
        print "Getting gold from your mama's house!"
        request.session['num_gold'] += random.randrange(2,6)
        request.session['message'] = "Getting gold from your mama's house!"

    if request.POST['buildings'] == 'casino':
        print 'Your robbing the casino!'
        request.session['num_gold'] += random.randrange(-51,51)
        request.session['message'] = 'Your robbing the casino!'
    elif(request.session['num_gold'] < 51):
        request.session['message'] = 'Your losing your gold!'

    return render(request,'ninjagold/index.html')

def reset(request):
    request.session.clear()
    return redirect('http://127.0.0.1:8000/')

# Create your views here.
