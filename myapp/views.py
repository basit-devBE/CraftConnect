from myapp.templates import *
from django.http import HttpResponse
from myapp.models import Job
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from myapp.forms import UserForm
from django.contrib import messages
from django.contrib.auth import login as auth_login,logout as auth_logout,authenticate
from django.contrib.auth.decorators import login_required

@login_required(login_url='login')
def hello(request):

    job1 = Job()
    job1.jobtitle = "Software Developer"
    job1.jobdescription = "Develop software"
    job1.joblocation = "New York"
    job1.jobtype = "Full-time"
    job1.jobfunction = "Software Development"
    job1.jobeducation = "Bachelor's Degree"
    job1.joblevel = "Entry Level"
    job1.company = "Google"

    return render(request, "myapp/index.html", {"job": job1})


def signup(request):
    form = UserForm()
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "User created successfully!")
            return render(request, 'myapp/login.html')
    context = {
        "form": form
    }
    return render(request, 'myapp/signup.html', context)


def login(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            auth_login(request, user)
            return redirect('hello')
        else:
            messages.info(request, 'Username OR password is incorrect')
            return render(request, 'myapp/login.html')
    context = {}
    return render(request, 'myapp/login.html', context)

def logout(request):
    auth_logout(request)
    return redirect('login')

def land(request):
    return render(request, 'myapp/land.html')

def postjob(request):
    return render(request, 'myapp/post.html')