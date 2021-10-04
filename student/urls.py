from django.urls import path
from .views import commands, student

urlpatterns = [
    path('', commands),
    path('student/', student)
]
