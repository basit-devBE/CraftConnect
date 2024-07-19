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
from myapp.forms import JobPostForm

@login_required(login_url='login')
def hello(request):
    query = request.GET.get('query') if request.method == 'GET' else ''
    if query:
        jobs = Job.objects.filter(user=request.user)
    else:
        jobs = Job.objects.all()

    return render(request, "myapp/index.html", {'jobs':jobs})


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


def apply(request):
    return render(request, 'myapp/apply.html')


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


@login_required(login_url='login')
def postjob(request):
    
    if request.method == "POST":
        form = JobPostForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Job posted successfully!")
            return redirect('hello')
        
    else:
        form = JobPostForm()
        context = {
            "form": form
        }
        return render(request, 'myapp/post.html', context)