from django.db import models
from django.contrib.auth.models import User

# Create your models here.from django.db import models

class JobPost(models.Model):
    jobtitle = models.CharField(max_length=100)
    jobdescription = models.TextField()
    joblocation = models.CharField(max_length=100)
    jobtype = models.CharField(max_length=50)
    jobfunction = models.CharField(max_length=50)
    jobeducation = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.jobtitle}'


class Job(models.Model):

    job_type_choices = {
        'Full time': 'Full time',
        'Contract': 'Contract',
        'Part-time': 'Part-time',
        'Remote': 'Remote'
    }
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    jobtitle = models.CharField(max_length=100)
    jobdescription = models.TextField()
    joblocation = models.CharField(max_length=100)
    jobtype = models.CharField(max_length=50, choices=job_type_choices)
    jobfunction = models.CharField(max_length=50)
    jobeducation = models.CharField(max_length=100)
    joblevel = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    jobpay_min = models.PositiveIntegerField(default=0)
    jobpay_max = models.PositiveIntegerField(default=0)
    posted_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.jobtitle

