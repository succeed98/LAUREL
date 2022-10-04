from django.urls import path
from . import views


app_name = "teacher"

urlpatterns = [
    path('', views.teachersDashboard, name='dashboard'),
    path('add-teacher/', views.add_teacher, name='add_teacher'),
    path('list-teacher/', views.list_teacher, name='list_teacher'),
    path('delete-teacher/', views.delete_teacher, name='delete_teacher'),
    path('update-teacher/', views.update_teacher, name='update_teacher'),
    path('detail-teacher/<int:pk>', views.detail_teacher, name='detail_teacher'),

]
