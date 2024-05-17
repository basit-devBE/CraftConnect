from django.db import models

# Create your models here.from django.db import models

class JobPost(models.Model):
    jobtitle = models.CharField(max_length=100)
    jobdescription = models.TextField()
    joblocation = models.CharField(max_length=100)
    jobtype = models.CharField(max_length=50)
    jobfunction = models.CharField(max_length=50)
    jobeducation = models.CharField(max_length=100)


class Job(models.Model):
    jobtitle = models.CharField(max_length=100)
    jobdescription = models.TextField()
    joblocation = models.CharField(max_length=100)
    jobtype = models.CharField(max_length=50)
    jobfunction = models.CharField(max_length=50)
    jobeducation = models.CharField(max_length=100)
    joblevel = models.CharField(max_length=100)
    company = models.CharField(max_length=100)

    def __str__(self):
        return self.jobtitle
