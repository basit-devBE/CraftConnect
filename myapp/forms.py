from django.forms import ModelForm
from django.contrib.auth.models import User
from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import JobPost, Job

class UserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
    widgets = {
        'username': forms.TextInput(attrs={'placeholder': 'Enter Username'}),
        'email': forms.EmailInput(attrs={'placeholder': 'Enter Email'}),
        'password1': forms.PasswordInput(attrs={'placeholder': 'Enter Password'}),
        'password2': forms.PasswordInput(attrs={'placeholder': 'Confirm Password'}),
    }

class JobPostForm(ModelForm):
    class Meta:
        model = Job
        fields =  '__all__'
        exclude = ['posted_date']

    widgets = {
        'jobtitle': forms.TextInput(attrs={'placeholder': 'Job title'}),
        'jobdescription': forms.TextInput(attrs={'placeholder': 'Job description'}),
        'joblocation': forms.TextInput(attrs={'placeholder': 'Location of job'}),
        'jobtype': forms.TextInput(attrs={'placeholder': 'Job type'}),
        'jobfunction': forms.TextInput(attrs={'placeholder': 'Job function'}),
        'jobeducation': forms.TextInput(attrs={'placeholder': 'Minimum education requirement'}),
    }