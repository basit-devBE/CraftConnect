# Generated by Django 5.0.6 on 2024-07-19 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_alter_job_jobpay_max_alter_job_jobpay_min'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='jobtype',
            field=models.CharField(choices=[('Full time', 'Full time'), ('Contract', 'Contract'), ('Part-time', 'Part-time')], max_length=50),
        ),
    ]
