from django.conf.urls import url
# from django.contrib import admin
from.import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^dashboard$', views.dashboard),
    url(r'^new$', views.new),
    url(r'^create$', views.create),
    url(r'^logout$', views.logout),
    url(r'^show/(?P<id>\d+)$', views.show),
    url(r'^destroy/(?P<id>\d+)$', views.destroy),
    url(r'^wishlist$', views.wishlist),
    url(r'^login$', views.login),
    url(r'^register$', views.register),

]
