from django.forms import ModelForm
from django.contrib.auth.models import User
from django import forms
from django.contrib.auth.forms import UserCreationForm


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

