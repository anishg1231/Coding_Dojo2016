from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.index),
    url(r'^login$', views.index),
    url(r'^books$', views.books)
    # url(r'^add$', views.add)
]
