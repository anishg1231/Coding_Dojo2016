from django.conf.urls import url
from.import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^register$', views.register),
    url(r'^dashboard$', views.dashboard),
    url(r'^new$', views.new),
    url(r'^create$', views.create),
    url(r'^othertrip/(?P<id>\d+)$', views.othertrip),
    url(r'^logout$', views.logout),
    url(r'^show/(?P<id>\d+)$',views.show),

]
