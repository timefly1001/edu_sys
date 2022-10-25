from django.urls import path
from . import views

urlpatterns = [
    path("edu_sys/user/login", views.login),
    path("edu_sys/user/info", views.get_info),
    path("edu_sys/user/logout", views.logout)
]
