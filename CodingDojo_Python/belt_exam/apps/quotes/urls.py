from django.conf.urls import url
# from django.contrib import admin
from.import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^register$', views.register),
    url(r'^quotes$', views.quotes),
    url(r'^new$', views.new),
    url(r'^create$', views.create),
    url(r'^logout$', views.logout),
    url(r'^favorite/(?P<quote_id>\d+)$', views.favorite),
    url(r'^destroy/(?P<id>\d+)$',views.destroy),
    url(r'^show/(?P<id>\d+)$',views.show),
]

# quote_list = Quotes.objects.all(),
# user_id = Favorite.objects.filter(user_id=request.session['id'])
# print userid.values_list('quote, flat=True')
# Quotes.objects.all().exclude(id__in=userid.values_list('quotes',
# flat=True))
# print exclude
# context = {
# 'myquotes': Favorite.objects.filter(user=Users.objects.get(id=request.session['id'])),
# 'quotes': exclude,
# }
# return render(request, 'quotes/quotes.html', context)

#original code
# context ={
# 'quotes': Quotes.objects.all(),
# 'myquotes': Favorite.objects.all()
# }
# return render(request, 'quotes/quotes.html', context)
