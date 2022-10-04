from django.db import models
from authentication.models import *
from django.conf import settings
from ckeditor.fields import RichTextField
from django.urls import reverse


class Subject(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    


    def __str__(self) -> str:
        return self.name




class Classroom(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    subjects = models.ManyToManyField(Subject, blank=True)


    def __str__(self):
        return self.name
    
    def get_subjects_count(self):
        return self.subjects.all().count()
    
    def get_absolute_url(self):
        return reverse("classroom:detail_classroom", kwargs={"pk": self.pk})

    class Meta:
        verbose_name = 'Classroom'
        verbose_name_plural = 'Classrooms'
        ordering = ['name']


