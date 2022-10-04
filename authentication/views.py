from django.shortcuts import render, HttpResponse, redirect, get_object_or_404, reverse, HttpResponseRedirect
from django.contrib.auth import authenticate, login,logout
from django.contrib import messages
from django.core import serializers
from django.http import JsonResponse
from django.core.serializers import serialize
from django.contrib.auth.decorators import login_required
from .models import *
from .forms import UserEditForm
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm

# Create your views here.

def user_index(request):
    return render(request, 'authentication/login.html')


def login_process(request):
    username = request.POST['username'].lower()
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        print("\n\n\n\n\n\n\n\n")
        login(request, user)
        
        return JsonResponse(
            {
                "msg": 'Login successfull',
                'is_student': user.is_student,
                'is_project_manager': user.is_project_manager,
                'is_teacher': user.is_teacher,
                'is_admin': user.is_staff,

                
            
            }, status=200)

    return JsonResponse({"msg": 'Wrong Password or Username'}, status=400)


def logout_process(request):
    logout(request)
    return redirect('/')

def index(request):
    return HttpResponse("You're at the authentication index.")


@login_required(login_url='authentication:login')
def edit_profile(request):
    page = 'dash'
    user = request.user
    user_form = UserEditForm(instance=user)

    if request.method == 'POST':
        user_form = UserEditForm(request.POST, request.FILES, instance=user)
        if user_form.is_valid():
            user_form.save()
            messages.success(request, 'Profile updated successfully')
            return redirect('authentication:edit_profile')
        else:
            messages.error(request, 'Error updating profile')
            user_form = UserEditForm(instance=user)

    template_name = 'authentication/profile.html'
    context = {'page': page, 'user': user, 'user_form': user_form}
    return render(request, template_name, context)


@login_required(login_url='authentication:login')
def reset_password(request):
    pk = request.GET.get('id', None)
    reset = User.objects.get(id=pk)
    reset.set_password('123456')
    reset.save()
    return JsonResponse({"msg": 'Password has been reseted Successfully'}, status=200)


# @login_required(login_url='authentication:login')
# user password change

def change_password(request):
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # Important!
            messages.success(request, 'Your password was successfully updated!')
            return redirect('authentication:edit_profile')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordChangeForm(request.user)

    template_name = 'authentication/profile.html'
    context = {'form': form}
    return render(request, template_name, context)