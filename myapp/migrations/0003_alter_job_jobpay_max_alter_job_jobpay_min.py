# Generated by Django 5.0.6 on 2024-07-19 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_job_jobpay_max_job_jobpay_min'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='jobpay_max',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='job',
            name='jobpay_min',
            field=models.PositiveIntegerField(default=0),
        ),
    ]