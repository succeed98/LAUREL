from django.urls import path
from . import views

app_name = 'classroom'

urlpatterns = [
    path('add-subject/', views.add_subject, name='add_subject'),
    path('add-class/', views.add_class, name='add_class'),
    path('list-classroom/', views.list_classroom, name='list_classroom'),
    path('list-subject/', views.list_subject, name='list_subject'),
    path('delete-classroom/', views.delete_classroom, name='delete_classroom'),
    path('delete-subject/', views.delete_subject, name='delete_subject'),
    path('list-lessons/<int:pk>', views.list_lessons, name='list_lessons'),
    path('detail-classroom/<int:pk>', views.detail_classroom, name='detail_classroom'),
    path('add-titles/', views.add_titles, name='add_titles'),
    path('lessons-enrolled-students/<int:pk>', views.enrolled_list, name='enrolled_list'),
    path('edit-class/', views.edit_class, name='edit_class'),
    
    ]