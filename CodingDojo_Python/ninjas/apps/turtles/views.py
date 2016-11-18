from django.shortcuts import render

def index(request):
    # no ninjas
    return render(request,'turtles/index.html')

def ninjas(request):
    # show all ninjas
    return render(request,'turtles/ninjas.html')

def ninja_color(request,color):
    if color == 'red':
        ninjas = 'http://orig09.deviantart.net/b3f5/f/2008/193/5/7/tmnt_red_by_tmask01.jpg'
    elif color == 'blue':
        ninjas = 'http://pre00.deviantart.net/59e4/th/pre/f/2015/344/d/b/tmnt__blue_by_mariadenisebrebos-d8ykvwe.png'
    elif color == 'orange':
        ninjas = 'http://uiconstock.com/wp-content/uploads/2014/06/michelangelo-tmnt-iphone-wallpaper.jpg'
    elif color == 'purple':
        ninjas = 'https://www.google.com/search?q=red+tmnt&rlz=1C5CHFA_enUS708US708&espv=2&biw=1315&bih=735&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiU45jjr5zPAhUC34MKHbhQDcgQ_AUICCgD#tbm=isch&q=purple+tmnt&imgdii=22ODEJyuc0u2lM%3A%3B22ODEJyuc0u2lM%3A%3BmsII_OPryaK5dM%3A&imgrc=22ODEJyuc0u2lM%3A'
    else:
        ninjas = 'http://cdn.hitfix.com/photos/5684799/MeganFoxTeenageMutantNinjaTurtles.jpg'
    content = { 'ninjas': ninjas}
    return render(request,'turtles/color.html', content)
# Create your views here.
