from django import forms
from .models import *
from authentication.models import *
from django.shortcuts import render, HttpResponse, redirect, get_object_or_404, reverse, HttpResponseRedirect


class ClientForm(forms.ModelForm):
    name = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'placeholder': 'Name', 'class':'form-control'}))


    class Meta:
        model = Subject
        fields = (
            'name',
        )





class ClassroomForm(forms.ModelForm):

   
    
    class Meta:
        model = Classroom
        fields = ('name','subjects', 'department',)


        widgets = {
            'subjects':forms.SelectMultiple(attrs={'class': 'form-control class-subject-multiple', 'required ' : 'False'}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'department':forms.Select(attrs={'class': 'form-control'}),


            }

    
