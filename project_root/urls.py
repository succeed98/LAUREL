
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authentication.urls')),
    path('teacher/', include('teachers.urls')),
    path('classroom/', include('classrooms.urls')),
    path('student/', include('students.urls')),
    path('dashboard/', include('dashboard.urls', namespace='dashboard')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

