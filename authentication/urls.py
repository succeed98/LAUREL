from django.urls import path
from . import views


app_name = "authentication"

urlpatterns = [
    path('', views.user_index, name='login'),
    path('index/', views.index, name='index'),
    path('login-process/', views.login_process, name='login_process'),
    path('logout-process/', views.logout_process, name='logout'),
    path('user-profile/', views.edit_profile, name='edit_profile'),
    path('reset_password/', views.reset_password, name='reset_password'),
    path('change_password/', views.change_password, name='change_password'),

]
