from django import forms
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from django.db import transaction
from .models import *
from classrooms.models import *

# For Student
class UserForm(forms.ModelForm):
    
    class Meta:
        model = User
        fields = ( 'first_name', 'last_name', 'email', 'phone_number', 'gender','notes','profile',)
        exclude = ['password']


        widgets = {
            'profile' : forms.FileInput(attrs={'class': 'form-control'}),
            'first_name': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'username': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'phone_number': forms.TextInput( attrs={'class': 'form-control', 'required ' : 'True'}),
            'gender':forms.Select(attrs={'class': 'form-control'}),
            'notes': forms.Textarea(attrs={'class': 'form-control'}),


            }


class UserEditForm(forms.ModelForm):
    
    class Meta:
        model = User
        fields = ( 'first_name', 'last_name', 'email', 'phone_number', 'gender', 'profile',)
        exclude = ['password']


        widgets = {
            'profile' : forms.FileInput(attrs={'class': 'form-control'}),
            'first_name': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'username': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'phone_number': forms.TextInput( attrs={'class': 'form-control', 'required ' : 'True'}),
            'gender':forms.Select(attrs={'class': 'form-control'}),
            }





class StudentUserForm(forms.ModelForm):
    
    class Meta:
        model = User
        fields = ( 'first_name', 'last_name', 'phone_number', 'gender','notes','profile',)
        exclude = ['password']


        widgets = {
            'profile' : forms.FileInput(attrs={'class': 'form-control'}),
            'first_name': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'username': forms.TextInput(attrs={'class': 'form-control', 'required ' : 'True'}),
            'phone_number': forms.TextInput( attrs={'class': 'form-control', 'required ' : 'True'}),
            'gender':forms.Select(attrs={'class': 'form-control'}),
            'notes': forms.Textarea(attrs={'class': 'form-control'}),


            }




class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ('classroom',)
        exclude = ['user']


        widgets = {
            'classroom':forms.Select(attrs={'class': 'form-control'}),


            }


class TeacherForm(forms.ModelForm):
    subjects = forms.ModelMultipleChoiceField(
        widget=forms.SelectMultiple(
            attrs={'class': 'form-control class-subject-multiple' ,'id': 'teacher_subjects' })
        ,required = False,queryset=Student.objects.order_by('user__first_name'),)
    class Meta:
        model = Teacher
        fields = ('classroom','subjects')
        exclude = ['user']


        widgets = {
            'classroom':forms.Select(attrs={'class': 'form-control', 'required ' : 'False', 'id': 'teacher_classrooom'}),


            }


# For Teacher
class UserFormTeacher(forms.ModelForm):
    class Meta:
        model = User
        fields = ( 'first_name', 'last_name', 'email', 'phone_number', 'gender','notes','profile',)
        exclude = ['password']


        widgets = {
            'profile' : forms.FileInput(attrs={'class': 'form-control', 'id': 'teacher_profile'}),
            'first_name': forms.TextInput(attrs={'class': 'form-control', 'id': 'teacher_first_name', 'required ' : 'True'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control', 'id': 'teacher_last_name', 'required ' : 'True'}),
            'username': forms.TextInput(attrs={'class': 'form-control', 'id': 'teacher_username', 'required ' : 'True'}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'id': 'teacher_email', 'required ' : 'True'}),
            'phone_number': forms.TextInput( attrs={'class': 'form-control', 'id': 'teacher_phone_number', 'required ' : 'True'}),
            'gender':forms.Select(attrs={'class': 'form-control', 'id': 'teacher_gender'}),
            'notes': forms.Textarea(attrs={'class': 'form-control', 'id': 'teacher_notes'}),


            }


# change user password form
# class PasswordChangeForm(forms.Form):
#     old_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'id': 'old_password'}))
#     new_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'id': 'new_password'}))
#     confirm_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'id': 'confirm_password'}))

#     def clean_confirm_password(self):
#         new_password = self.cleaned_data['new_password']
#         confirm_password = self.cleaned_data['confirm_password']

#         if new_password != confirm_password:
#             raise forms.ValidationError('Passwords do not match')
#         return confirm_password

#     def __init__(self, *args, **kwargs):
#         self.user = kwargs.pop('user')
#         super(PasswordChangeForm, self).__init__(*args, **kwargs)
