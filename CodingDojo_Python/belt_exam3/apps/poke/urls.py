from django.conf.urls import url
from.import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^register$', views.register),
    url(r'^new$', views.new),
    url(r'^create/(?P<id>\d+)$', views.create),
    url(r'^logout$', views.logout),
    url(r'^dashboard$', views.dashboard),
]

# {{ counter.increment }} {{ counter.count }}
