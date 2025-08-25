from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models


class JoinSubmission(models.Model):
    full_name = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    course = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    skills = models.TextField()
    linkedin = models.URLField(blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.full_name} ({self.course})"

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra):
        if not email:
            raise ValueError("Email required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra):
        extra.setdefault("is_staff", True)
        extra.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra)

JOB_CHOICES = [
    ("Software Engineer", "Software Engineer"),
    ("Product Manager", "Product Manager"),
    ("Data Scientist", "Data Scientist"),
    ("UX Designer", "UX Designer"),
    ("DevOps Engineer", "DevOps Engineer"),
    ("QA Engineer", "QA Engineer"),
    ("Marketing Manager", "Marketing Manager"),
    ("Sales Representative", "Sales Representative"),
    ("Other", "Other"),
]

class User(AbstractBaseUser, PermissionsMixin):
    email      = models.EmailField(unique=True)
    full_name  = models.CharField(max_length=150)
    job_title  = models.CharField(max_length=50, choices=JOB_CHOICES)
    is_staff   = models.BooleanField(default=False)
    is_active  = models.BooleanField(default=True)

    USERNAME_FIELD  = "email"
    REQUIRED_FIELDS = ["full_name"]

    objects = UserManager()

    def __str__(self):
        return self.email