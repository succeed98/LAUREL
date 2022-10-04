from django.shortcuts import render, HttpResponse, redirect, get_object_or_404, reverse, HttpResponseRedirect
from django.core import serializers
from django.http import JsonResponse
from authentication.forms import *
import random
from django.core.files.storage import FileSystemStorage
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from classrooms.forms import *
from classrooms.models import *
import students
import random
import logging

logger = logging.getLogger(__name__)


@login_required(login_url='authentication:login')
def teachersDashboard(request):
    page = 'dash'

    template_name = 'teachers/index.html'
    context = {
        'page': page, 

    }
    return render(request, template_name, context)



@login_required(login_url='authentication:login')
def list_teacher(request):
    page = 'teacher'
    list_teachers = Teacher.objects.all()
    list_teachers_count = Teacher.objects.all().count()
    user_form = UserFormTeacher()
    teacher_form = TeacherForm()
    subjects = Subject.objects.all()
    classrooms = Classroom.objects.all()




    template_name = 'teachers/list_teachers.html'
    context = {
        'list_teachers':list_teachers,
        'user_teacher_form':user_form,
        'teacher_form':teacher_form,
        'list_teachers_count':list_teachers_count,
        'subjects':subjects,
        'classrooms':classrooms,
        'page':page,

    }
    return render(request, template_name, context)



@login_required(login_url='authentication:login')
def detail_teacher(request,pk):
    page = 'teacher'
    teacher_detail = get_object_or_404(Teacher, pk = pk)
    user_teacher_form = UserFormTeacher(instance = teacher_detail.user)
    teacher_form = TeacherForm(instance = teacher_detail)
    subjects = Subject.objects.all()
    classrooms = Classroom.objects.all()

    template_name = 'teachers/teacher_detail.html'
    context = {
        'teacher_detail':teacher_detail,
        'user_teacher_form':user_teacher_form,
        'teacher_form':teacher_form,
        'subjects':subjects,
        'classrooms':classrooms, 'page':page,
    }
    return render(request, template_name, context)




@login_required(login_url='authentication:login')
def add_teacher(request):
   
    if request.method == "POST":
        image = request.POST['profile']

        try:

            upload_file = request.FILES.get('teacherimagef')
            print(upload_file)
            fs = FileSystemStorage()
            fs.save(upload_file.name, upload_file)
            print(image)
        except:
            pass
        print("@@@@@@@post")
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        form = UserFormTeacher(request.POST, request.FILES)
        if form.is_valid():
            print('done')
            userform = form.save(commit=False)
            fullname = last_name.lower() + first_name.lower()
            if User.objects.filter(username=fullname).exists():
                n = random.randint(0,100)
                final_fullname = fullname + str(n)
            else:
                final_fullname = fullname
            
            print('done1')
            userform.username = final_fullname
            if image:
                userform.profile = upload_file
            userform.set_password('123456')
            userform.is_teacher = True
            userform.save()

            is_subjects = request.POST['subjects_bool']
            print("subjects_bool")
            print(is_subjects)
            is_classroom = request.POST['classroom_bool']
            print("classroom_bool")
            print(is_classroom)
            if is_subjects == "yes" and is_classroom == "no":
                subjects = request.POST.getlist('subject')
                logger.debug("request.POST.getlist('subject')")
                logger.debug(subjects)
                print("-------------------")
                create_teacher = Teacher.objects.create(
                    user = userform,
                    is_subject_teacher  = True,
                )

                for subject in subjects:
                    final_subject = subject.split(',')
                    logger.debug(final_subject)
                    for i in final_subject:
                        logger.debug(i)
                        create_teacher.subjects.add(i)
                logger.debug('is_subjects')
            if is_classroom == "yes" and is_subjects == "no":
                classroom = request.POST['classroom']
                final_classroom = Classroom.objects.get(pk = classroom)
                print(final_classroom)
                create_teacher = Teacher.objects.create(
                    user = userform,
                    classroom= final_classroom,
                    is_class_teacher = True,
                )
                print("classroom")
                print('is_classroom')

            if is_subjects == "no" and is_classroom == "no":
                create_teacher = Teacher.objects.create(
                    user = userform,
                )
                print('is_subjects____is_classroom')
            
            if is_subjects == "yes" and is_classroom == "yes":
                create_teacher = Teacher.objects.create(
                    user = userform,
                    is_class_teacher = True,
                    is_subject_teacher  = True,


                )
                print('is_subjects____is_classroom')
            


            return JsonResponse({"msg": 'teacher Added Successfully'}, status=200)
        else:
            errors_field = []
            for field in form:
                print(field.name)
                for error in field.errors:
                    errors_field.append(error)

            print(errors_field)
            return JsonResponse({"msg": 'Something Went Wrong', "errors_field": errors_field}, status=400)




@login_required(login_url='authentication:login')
def update_teacher(request):
    
    print("\n\n\n\n\n\n\n\n")
    print(request.POST)
    
   
    if request.method == "POST":
        image = request.POST['profile']

        try:

            upload_file = request.FILES.get('teacherimagef')
            print(upload_file)
            fs = FileSystemStorage()
            fs.save(upload_file.name, upload_file)
            print(image)
        except:
            pass
        
        teacher_id = request.POST['teacher_id']
        teacher_detail = get_object_or_404(Teacher, pk = teacher_id)

        print("@@@@@@@post")
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        form = UserFormTeacher(request.POST, request.FILES, instance = teacher_detail.user)
        if form.is_valid():
            print('done')
            userform = form.save(commit=False)
            fullname = last_name.lower() + first_name.lower()
            if User.objects.filter(username=fullname).exists():
                n = random.randint(0,100)
                final_fullname = fullname + str(n)
            else:
                final_fullname = fullname
            
            print('done1')
            userform.username = final_fullname
            if image:
                userform.profile = upload_file
            userform.set_password('123456')
            userform.is_teacher = True
            userform.save()

            is_subjects = request.POST['subjects_bool']
            print(is_subjects)
            is_classroom = request.POST['classroom_bool']
            print(is_classroom)
            if is_subjects == "yes" and is_classroom == "no":
                create_teacher = Teacher.objects.filter(id = teacher_detail.id).update(
                is_class_teacher  = False,
                classroom = None,
                )
                subjects = request.POST.getlist('subject')
                print(subjects)

                create_teacher = Teacher.objects.filter(id = teacher_detail.id).update(
                    is_subject_teacher  = True,
                )
                get_subjects = Teacher.objects.get(id = teacher_detail.id)
                get_subjects_list = [str(x.id) for x in get_subjects.subjects.all()]
                for subject in subjects:
                    final_subject = subject.split(',')
                    print(final_subject)
                    print("-------------------")
                    print(get_subjects_list)
                    for i in final_subject:
                        if i in get_subjects_list:
                            pass
                        else:
                            print(i)
                            
                            get_subjects.subjects.add(i)
                            get_subjects.save()
                print('is_subjects')
            if is_classroom == "yes" and is_subjects == "no":
                create_teacher = Teacher.objects.filter(id = teacher_detail.id).update(
                is_subject_teacher  = False,
                )
                get_subjects = Teacher.objects.get(id = teacher_detail.id)
                get_subjects_list = [str(x.id) for x in get_subjects.subjects.all()]
                for i in get_subjects_list:
                    get_subjects.subjects.remove(i)
                    get_subjects.save()
                    

                classroom = request.POST['classroom']
                final_classroom = Classroom.objects.get(pk = classroom)
                print(final_classroom)

                create_teacher = Teacher.objects.filter(id = teacher_detail.id).update(
                    classroom= final_classroom,
                    is_class_teacher = True,
                )
                print('is_classroom')

            if is_subjects == "no" and is_classroom == "no":
                print("is_subjects____is_classroom")
                # create_teacher = Teacher.objects.filter(id = teacher_detail.id).update(
                #     user = userform,
                # )
                print('is_subjects____is_classroom')

            return JsonResponse({"msg": 'teacher Updated Successfully'}, status=200)
        else:
            errors_field = []
            for field in form:
                print(field.name)
                for error in field.errors:
                    errors_field.append(error)

            print(errors_field)
            return JsonResponse({"msg": 'Something Went Wrong', "errors_field": errors_field}, status=400)







@login_required(login_url='authentication:login')
def delete_teacher(request):
    pk = request.GET.get('id', None)
    delete_teacher = User.objects.get(id=pk)
    delete_teacher.delete()
    return JsonResponse({"msg": 'teacher Deleted Successfully'}, status=200)







def get_teacher_status(request):
    get_teacher_status = None
    if request.user.is_authenticated:
        try:
            get_user = get_object_or_404(User, pk = request.user.id)
            get_teacher_status = get_object_or_404(Teacher, user = get_user)
        except:
            get_teacher_status = None
    
    return {
        'get_teacher_status':get_teacher_status
    }