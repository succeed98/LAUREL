from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.db.models.signals import post_save
from django.dispatch import receiver
from classrooms.models import *


AUTH_PROVIDERS = {'facebook': 'facebook', 'google': 'google',
                  'twitter': 'twitter', 'email': 'email'}


GENDER = (
    ('male','MALE'),
    ('female', 'FEMALE'),
)


TITLE = (
    ('Mr','Mr'),
    ('Mrs', 'Mrs'),
    ('Miss', 'Miss'),
    ('Dr', 'Dr'),
    ('Prof.', 'Prof.'),
)


class User(AbstractUser):
    auth_provider = models.CharField(
        max_length=255, blank=False,
        null=False, default=AUTH_PROVIDERS.get('email'))
    is_student = models.BooleanField(default=False)
    is_project_manager = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=False)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    profile = models.ImageField( blank=True)
    gender = models.CharField(max_length=10, choices=GENDER, blank=True, null=True)
    text = models.TextField(blank = True)
    notes = models.TextField(blank = True)





class Student(models.Model):
    user = models.OneToOneField(
      User, on_delete=models.CASCADE, blank=True, null=True)
    classroom = models.ForeignKey(Classroom, on_delete = models.CASCADE, blank=True, null=True)
    points = models.IntegerField(default=0)
    badges = models.IntegerField(default=0)
    trophies = models.IntegerField(default=0)
    medals = models.IntegerField(default=0)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name




class Teacher(models.Model):
    user = models.OneToOneField(
      User, on_delete=models.CASCADE, blank=True, null=True)
    is_class_teacher = models.BooleanField(default=False)
    is_subject_teacher = models.BooleanField(default=False)
    classroom = models.ForeignKey(Classroom, on_delete = models.CASCADE, blank=True, null=True)
    subjects = models.ManyToManyField(Subject, blank=True)
    

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name



class ProjectManager(models.Model):
    user = models.OneToOneField(
      User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.user.username



