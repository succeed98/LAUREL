from unicodedata import name
from django.shortcuts import render
from classrooms.models import *
from classrooms.forms import *
from authentication.forms import *
from django.contrib.auth.decorators import login_required
from .models import *
from django.shortcuts import render, HttpResponse, redirect, get_object_or_404, reverse, HttpResponseRedirect
from django.core import serializers
from django.http import JsonResponse

@login_required(login_url='authentication:login')
def index(request):
    page = 'dash'
    subject_count = Subject.objects.all().count()
    subjects = Subject.objects.all()
    classrooms = Classroom.objects.all()
    classroom_count = Classroom.objects.all().count()
    teacher_count = Teacher.objects.all().count()
    student_count = Student.objects.all().count()
    student_form = StudentForm()
    student_user_form = StudentUserForm()
    user_form = UserForm()
    class_form = ClassroomForm()
    teacher_form = TeacherForm()
    user_teacher_form = UserFormTeacher()

    template_name = 'dashboard/index.html'
    context = {
        'subject_count':subject_count,
        'student_form':student_form,
        'user_form':user_form,
        'student_user_form':student_user_form,
        'classroom_count':classroom_count,
        'student_count':student_count,
        'class_form':class_form,
        'teacher_form':teacher_form,
        'subjects': subjects,
        'classrooms': classrooms,
        'user_teacher_form':user_teacher_form,
        'teacher_count':teacher_count,
        'page':page,    
    }
    return render(request, template_name, context)


@login_required(login_url='authentication:login')
def all_classrooms(request):
    page = 'classroom'

    class_filter = request.GET.get('grade_selector')
    subject_filter = request.GET.get('subject_selector')
    print(class_filter)


    all_classrooms = Classroom.objects.all()
    all_subjects = Subject.objects.all()
    classrooms = Classroom.objects.all()

    if class_filter != '' and class_filter is not None:
        all_classrooms = all_classrooms.filter(name__exact=class_filter).distinct()
        

    if subject_filter != '' and subject_filter is not None:
        all_subjects = all_subjects.filter(name__exact=subject_filter, classroom__in=all_classrooms ).distinct()

    subjects = Subject.objects.filter(classroom__in=all_classrooms).distinct()

    
    students = Student.objects.filter(classroom__in=all_classrooms).distinct()

    # class_filter = ''
    
    template_name = 'dashboard/classrooms.html'
    context = {
        'list_classrooms':all_classrooms,
        'subjects': subjects, 'all_subjects':all_subjects,
         'classrooms': classrooms,
        'students': students, 'class_filter':class_filter,
        'page': page, 'all_classrooms': all_classrooms,
    }
    return render(request, template_name, context)


def inbox(request):
    
    template_name = 'dashboard/inbox.html'
    context = {}
    return render(request, template_name, context)




def profile(request):

    if request.user.is_teacher == True:
        get_user = get_object_or_404(User, pk = request.user.id)
        user = get_object_or_404(Teacher, user = get_user)
        
    if request.user.is_student == True:
        get_user = get_object_or_404(User, pk = request.user.id)
        user = get_object_or_404(Student, user = get_user)
    if request.user.is_project_manager == True:
        get_user = get_object_or_404(User, pk = request.user.id)
        try:
            user = get_object_or_404(ProjectManager, user = get_user)
        except:
            user = None
    if request.user.is_headteacher == True:
        get_user = get_object_or_404(User, pk = request.user.id)
        user = get_object_or_404(HeadMaster, user = get_user)
    
    template_name = 'dashboard/profile.html'
    context = {
        'user':user,
    }
    return render(request, template_name, context)


@login_required(login_url='authentication:login')
def get_classroom_details(request,pk):
    page = 'classroom'

    get_classroom = ''
    get_classroom = get_object_or_404(Classroom, pk = pk)  
    class_form = ClassroomForm(instance=get_classroom)



    context = {
        'class_form':class_form,
        'subjects': get_classroom.subjects.all,
        'classrooms': Classroom.objects.all(),
        'students': Student.objects.filter(classroom=get_classroom),
        'page': page,
         'get_classroom': get_classroom,
    }
    template_name = 'dashboard/classrooms.html'
    return render(request, template_name, context)






@login_required(login_url='authentication:login')
def list_department(request):
    page = 'department'
    list_department = Department.objects.all()



    template_name = 'dashboard/list_department.html'
    context = {
        'list_department':list_department,
        'page': page,


    }
    return render(request, template_name, context)




@login_required(login_url='authentication:login')
def add_department(request):
    print("\n\n\n\n\n\n\n\n")
    print(request.POST)
    departmentname = request.POST['departmentname']
    print(departmentname)

    subjects = Department.objects.create(
        name=departmentname
        )


    return JsonResponse({"msg": 'Department Added Successfully'}, status=200)





@login_required(login_url='authentication:login')
def delete_department(request):
    pk = request.GET.get('id', None)
    delete_department = Department.objects.get(id=pk)
    delete_department.delete()
    return JsonResponse({"msg": 'Department Deleted Successfully'}, status=200)