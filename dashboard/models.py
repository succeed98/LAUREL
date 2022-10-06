from django.db import models
from authentication.models import *
from django.conf import settings
from ckeditor.fields import RichTextField
from django.urls import reverse


class Department(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    


    def __str__(self) -> str:
        return self.name