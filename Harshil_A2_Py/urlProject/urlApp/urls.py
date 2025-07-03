from django.urls import path

from . import views

urlpatterns=[
    path('',views.home,name="home.html"),
    path('contact/',views.contact,name='contact.html'),
    path('about/',views.about,name='about.html')
]