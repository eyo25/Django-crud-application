from django.db import models
import datetime

# Create your models here.
class Employee(models.Model):
    firstName=models.CharField(max_length=250 , null=True)
    middleName=models.CharField(max_length=250 , blank=True, null=True)
    lastName=models.CharField(max_length=250 , blank=True, null=True)
    age=models.IntegerField()
    email=models.EmailField()
    salary=models.FloatField()

    def __str__(self):
        return self.firstName