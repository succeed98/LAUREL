from django.urls import path
from . import views


app_name = "student"

urlpatterns = [
    path('', views.studentsDashboard, name='dashboard'),
    path('add-student/', views.add_student, name='add_student'),
    path('list-student/', views.list_student, name='list_student'),
    path('delete-student/', views.delete_student, name='delete_student'),
    path('update-student/', views.update_student, name='update_student'),
    path('detail-student/<int:pk>', views.detail_student, name='detail_student'),
    path('classroom', views.my_classroom, name='classroom'),
]
