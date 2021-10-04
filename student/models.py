from django.db import models
from django.contrib.auth.models import User

class Group(models.Model):
    schoolclass = models.CharField(max_length=10)
    lesson_name = models.CharField(max_length=20)
    time = models.CharField(max_length=10)

    def __str__(self):
        return self.schoolclass + self.lesson_name + self.time

    def serialize(self):
        return {
            "class": self.schoolclass,
            "lesson": self.lesson_name,
            "time": self.time
        }

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=20)
    name = models.CharField(max_length=30)
    groups = models.ManyToManyField(Group)

    experience = models.IntegerField()

    def __str__(self):
        return self.name

    def serialize(self):
        return {
            'id':self.id,
            'nickname':self.nickname,
            'experience':self.experience,
            'groups': self.get_groups()
        }
    def get_groups(self):
        data = []
        for group in self.groups.all():
            data.append(group.serialize())
        return data