# from multiprocessing import context
from django.shortcuts import render, HttpResponse, redirect, get_object_or_404, reverse, HttpResponseRedirect
from django.core import serializers
from django.http import JsonResponse
from authentication.forms import *
import random
from datetime import date
from django.core.files.storage import FileSystemStorage
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from classrooms.models import *
from authentication.models import Teacher, User
import random


# Create your views here.
@login_required(login_url='authentication:login')
def studentsDashboard(request):
    page = 'dash'
    student = request.user.student
    my_announcements = Announcement.objects.filter(scheduled_for='students')

    my_lessons = 0
    all_lessons = Lesson.objects.all()
    for lesson in all_lessons:
        if request.user in lesson.students.all():
            my_lessons += 1

    my_points = student.points
    

    if Quotation.objects.all():
        list_quotes = [x.id for x in Quotation.objects.all()]
        final_len = len(list_quotes) - 1
        rangequotes = random.randint(0, final_len)
        quotes_detail = Quotation.objects.get(id=list_quotes[rangequotes])
    else:
        quotes_detail = None

    template_name = 'students/index.html'
    context = {
        'page': page, 'bible': quotes_detail,
        'my_lessons': my_lessons, 'my_points': my_points,
        'my_announcements': my_announcements.count(),
    }
    return render(request, template_name, context)


@login_required(login_url='authentication:login')
def list_student(request):
    page = 'student'
    list_students = Student.objects.all()
    user_form = StudentUserForm()
    student_form = StudentForm()



    template_name = 'students/list_students.html'
    context = {
        'list_students':list_students,
        'user_form':user_form,
        'student_form':student_form,
        'page':page,

    }
    return render(request, template_name, context)



@login_required(login_url='authentication:login')
def detail_student(request,pk):
    page = 'student'
    student_detail = get_object_or_404(Student, pk = pk)
    user_form = StudentUserForm(instance = student_detail.user)
    student_form = StudentForm(instance = student_detail)

    template_name = 'students/student_detail.html'
    context = {
        'student_detail':student_detail,
        'user_form':user_form,
        'student_form':student_form,
        'page':page,
    }
    return render(request, template_name, context)




@login_required(login_url='authentication:login')
def add_student(request):
    print("\n\n\n\n\n\n\n\n")
    
   
    if request.method == "POST":
        print(request.POST)
        image = request.POST['profile']
        print(image)

        try:

            upload_file = request.FILES.get('studentimagef')
            print(upload_file)
            fs = FileSystemStorage()
            fs.save(upload_file.name, upload_file)
            print(image)
        except:
            pass
        print("@@@@@@@post")
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        form = StudentUserForm(request.POST, request.FILES)
        student_form = StudentForm(request.POST, request.FILES)
        if form.is_valid() and student_form.is_valid():
            print('done')
            userform = form.save(commit=False)
            fullname = last_name.lower() + first_name.lower()
            if User.objects.filter(username=fullname).exists():
                n = random.randint(0,100)
                final_fullname = fullname + str(n)
            else:
                final_fullname = fullname


            userform.username = final_fullname
            userform.email = final_fullname + "@edifyghana.org"
            if image:
                userform.profile = upload_file
            userform.set_password('123456')
            userform.is_student = True
            userform.save()
            studentform = student_form.save(commit = False)
            studentform.user = userform
            studentform.save()
            return JsonResponse({"msg": 'Student Added Successfully'}, status=200)
        else:
            errors_field = []
            for field in form:
                print(field.name)
                for error in field.errors:
                    print(error)
                    errors_field.append(error)

            print(errors_field)
            return JsonResponse({"msg": 'Something Went Wrong', "errors_field": errors_field}, status=400)




@login_required(login_url='authentication:login')
def update_student(request):
    
   
    if request.method == "POST":
        print("\n\n\n\n\n\n\n\n")
        print(request.POST)
        image = request.POST['profile']
        try:

            upload_file = request.FILES.get('studentimagef')
            print(upload_file)
            fs = FileSystemStorage()
            fs.save(upload_file.name, upload_file)
            print(image)
        except:
            pass
        student_id = request.POST['student_id']
        student_detail = get_object_or_404(Student, pk = student_id)

        
        
        print("@@@@@@@post")
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        form = StudentUserForm(request.POST, request.FILES, instance = student_detail.user)
        student_form = StudentForm(request.POST, request.FILES, instance = student_detail)
        if form.is_valid() and student_form.is_valid():
            print('done')
            userform = form.save(commit=False)

            fullname = last_name.lower() + first_name.lower()
            if User.objects.filter(username=fullname).exists():
                n = random.randint(0,100)
                final_fullname = fullname + str(n)
            else:
                final_fullname = fullname


            userform.username = final_fullname
            if image:
                userform.profile = upload_file
            userform.save()
            studentform = student_form.save()
            return JsonResponse({"msg": 'Student Added Successfully'}, status=200)
        else:
            errors_field = []
            for field in form:
                for error in field.errors:
                    errors_field.append(error)

            print(errors_field)
            return JsonResponse({"msg": 'Something Went Wrong', "errors_field": errors_field}, status=400)






@login_required(login_url='authentication:login')
def delete_student(request):
    pk = request.GET.get('id', None)
    delete_student = User.objects.get(id=pk)
    delete_student.delete()
    return JsonResponse({"msg": 'Student Deleted Successfully'}, status=200)




@login_required(login_url='authentication:login')
def my_classroom(request):
    page = 'classroom'

    teacher = Teacher.objects.all().first()
    lessons = Lesson.objects.filter(classroom=teacher.classroom, status='Approved')
    subjects = Subject.objects.all()
    template_name = 'students/my_classroom.html'
    context = {
        'page': page, 'subjects': subjects,
        'teacher': teacher, 'lessons': lessons,
    }
    return render(request, template_name, context)

