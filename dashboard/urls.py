from django.urls import path
from . import views

app_name = "dashboard"

urlpatterns = [
    path('', views.index, name='index'),
    path('inbox/', views.inbox, name='inbox'),
    path('profile/', views.profile, name='profile'),
    path('classrooms/', views.all_classrooms, name='all_classrooms'),
    path('get-classrooms/<int:pk>/', views.get_classroom_details, name='get_classroom'),
]
