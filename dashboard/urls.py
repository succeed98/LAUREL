from django.urls import path
from . import views

app_name = "dashboard"

urlpatterns = [
    path('', views.index, name='index'),
    path('inbox/', views.inbox, name='inbox'),
    path('list_department/', views.list_department, name='list_department'),
    path('add_department/', views.add_department, name='add_department'),
    path('delete_department/', views.delete_department, name='delete_department'),
    path('profile/', views.profile, name='profile'),
    path('classrooms/', views.all_classrooms, name='all_classrooms'),
    path('get-classrooms/<int:pk>/', views.get_classroom_details, name='get_classroom'),
]
