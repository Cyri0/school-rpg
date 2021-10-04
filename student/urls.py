from django.urls import path
from .views import commands, students, student, groups

urlpatterns = [
    path('', commands),
    path('student/', students),
    path('student/<int:id>', student),
    path('groups/', groups)
]