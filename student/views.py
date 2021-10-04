from django.http import JsonResponse
from .models import Group, Student

def commands(request):
    commands = {
        "api/":"This page...",
        "api/student":"Return all students",
        "api/student/[id]":"Return a specific student"
    }

    return JsonResponse(commands)

def student(request):
    data = {'students':[]}
    students = Student.objects.all()

    for student in students:
        data['students'].append(student.serialize())

    return JsonResponse(data)