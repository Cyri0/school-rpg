# Generated by Django 2.1.8 on 2021-10-04 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0002_auto_20211004_1650'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='experience',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
