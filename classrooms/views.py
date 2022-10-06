from django.shortcuts import render, HttpResponse, redirect, get_object_or_404, reverse, HttpResponseRedirect
from django.core import serializers
from django.http import JsonResponse
from authentication.models import *
from .models import *
from .forms import *
from django.contrib.auth.decorators import login_required
from dashboard.models import *

# Create your views here.

@login_required(login_url='authentication:login')
def add_subject(request):
    print("\n\n\n\n\n\n\n\n")
    print(request.POST)
    subjectname = request.POST['subjectname']
    print(subjectname)

    subjects = Subject.objects.create(
        name=subjectname
        )


    return JsonResponse({"msg": 'Subject Added Successfully'}, status=200)





@login_required(login_url='authentication:login')
def add_class(request):
    print("\n\n\n\n\n\n\n\n")
    print(request.POST)
    subjects = request.POST['subjects[]']
    print(subjects)
    
   
    if request.method == "POST":
        print("@@@@@@@post")
        name = request.POST['name']
        department = request.POST['department']
        subjects = request.POST.getlist('subjects[]')
        print(subjects)
        create_class = Classroom.objects.create(
            name = name,
            department = get_object_or_404(Department, id = department),
        )


        for subject in subjects:
            create_class.subjects.add(subject)

        return JsonResponse({"msg": 'Class Added Successfully'}, status=200)
    return JsonResponse({"msg": 'Something Went Wrong', "errors_field": "Something went wrong"}, status=400)





@login_required(login_url='authentication:login')
def edit_class(request):
    print("\n\n\n\n\n\n\n\n")
    print(request.POST)
    subjects = request.POST['subjects[]']
    print(subjects)
    
    class_id = request.POST['class_id']
    get_classroom = Classroom.objects.get(id=class_id)
    form = ClassroomForm(request.POST, instance=get_classroom)
    if request.method == "POST":
        form = ClassroomForm(request.POST, instance=get_classroom)
        if form.is_valid():
            form_status = form.save(commit=False)
            # for subject in subjects:
            # form_status.subjects.clear()
            form_status.department = get_object_or_404(Department, id = request.POST['department'])
            form_status.subjects.add(subjects)
            form_status.save()
            return JsonResponse({"msg": 'Class Updated Successfully'}, status=200)
        else:
            return JsonResponse({"msg": 'Something Went Wrong', "errors_field": "Something went wrong"}, status=400)
        
        # return JsonResponse({"msg": 'Class Added Successfully'}, status=200)
    return JsonResponse({"msg": 'Something Went Wrong', "errors_field": "Something went wrong"}, status=400)


@login_required(login_url='authentication:login')
def list_classroom(request):
    page = 'classroom'

    list_classrooms = Classroom.objects.all()
    class_form = ClassroomForm()
    subjects = Subject.objects.all()
    lessons = Lesson.objects.all()
    students = Student.objects.all()
    get_teacher = get_object_or_404(Teacher, user = request.user)


    template_name = 'classrooms/list_classroom.html'
    context = {
        'list_classrooms':list_classrooms,
        'class_form':class_form,
        'subjects': subjects,
        'lessons': lessons,
        'students': students,
        'page': page, 
        'get_teacher':get_teacher,
    }
    return render(request, template_name, context)


def add_titles(request):
    page = 'classroom'

    template_name = 'classrooms/add_subject_titles.html'
    context = {'page': page,}
    return render(request, template_name, context)





@login_required(login_url='authentication:login')
def list_subject(request):
    page = 'subject'
    list_subjects = Subject.objects.all()
    list_subjects_count = Subject.objects.all().count()



    template_name = 'classrooms/list_subjects.html'
    context = {
        'list_subjects':list_subjects,
        'list_subjects_count':list_subjects_count,
        'page': page,


    }
    return render(request, template_name, context)


@login_required(login_url='authentication:login')
def detail_classroom(request,pk):
    list_classrooms = Classroom.objects.all()
    classroom_detail = get_object_or_404(Classroom, pk = pk)
    classroom_students = Student.objects.filter(classroom = classroom_detail)[:2]
    classroom_students1 = Student.objects.filter(classroom = classroom_detail)[2:4]
    classroom_students_count = Student.objects.filter(classroom = classroom_detail).count()
    class_form = ClassroomForm(instance = classroom_detail)

    print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    print(classroom_detail)
    print(classroom_students)
    print("sdf")
    print(classroom_students1)

    template_name = 'classrooms/classroom_detail.html'
    context = {
        'classroom_detail':classroom_detail,
        'classroom_students':classroom_students,
        'class_form':class_form,
        'list_classrooms':list_classrooms,
        'classroom_students_count':classroom_students_count,
        'classroom_students1':classroom_students1,

    }
    return render(request, template_name, context)




def list_lessons(request,pk):
    page = 'classroom'
    # teacher = request.user
    lessons = Lesson.objects.filter(subject__id=pk)


    template_name = 'classrooms/list_lessons.html'
    context = {
         'lessons': lessons,
        'lesson_count': lessons.count(),
        'page': page,
    }
    return render(request, template_name, context)


@login_required(login_url='authentication:login')
def delete_classroom(request):
    pk = request.GET.get('id', None)
    delete_classroom = Classroom.objects.get(id=pk)
    delete_classroom.delete()
    return JsonResponse({"msg": 'Classroom Deleted Successfully'}, status=200)




@login_required(login_url='authentication:login')
def delete_subject(request):
    pk = request.GET.get('id', None)
    delete_subject = Subject.objects.get(id=pk)
    delete_subject.delete()
    return JsonResponse({"msg": 'Subject Deleted Successfully'}, status=200)


def enrolled_list(request,pk):
    page = 'lesson'
    lesson = get_object_or_404(Lesson, pk = pk)
    # TODO: create lesson enrollment model and link it to lesson and students
    # enrolled_students = LessonEnrollment.objects.filter(lesson = lesson)

    template_name = 'classrooms/enrolled_students.html'
    context = {
        'page': page, 'lesson': lesson,
    }
    return render(request, template_name, context)




