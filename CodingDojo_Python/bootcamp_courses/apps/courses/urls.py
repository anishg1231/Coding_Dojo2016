from django.conf.urls import url
from.import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^course$', views.course),
    url(r'^delete/(?P<id>\d+)$', views.show),
    url(r'^yes/(?P<id>\d+)$', views.destroy)
]
