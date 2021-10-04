from django.http import JsonResponse
from .models import Group, Student

def commands(request):
    commands = {
        "api/":"This page...",
        "api/student":"Return all students",
        "api/student/[id]":"Return a specific student"
    }

    return JsonResponse(commands)

def students(request):
    data = {'students':[]}
    students = Student.objects.all()

    for student in students:
        data['students'].append(student.serialize())

    return JsonResponse(data)

def student(request, id):
    student = Student.objects.get(id = id)
    return JsonResponse(student.serialize())

def groups(request):
    data = {'groups':[]}
    groups = Group.objects.all()

    for group in groups:
        data['groups'].append(group.serialize())

    return JsonResponse(data)