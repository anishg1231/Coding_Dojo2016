from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
# import datetime

def index(request):
    context = {
    "time": strftime("%a, %d %b %Y %H:%M:%S", gmtime())
    }
    return render(request,'timedisplay/index.html', context)

    # second way doing datetime
        # now = datetime.datetime.now()
        # context = {"time": now}
        # return render(request,'timedisplay/index.html', context)
