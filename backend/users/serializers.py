from allauth.account.models import EmailAddress
from dj_rest_auth.serializers import LoginSerializer
from rest_framework import serializers
from .models import User, JOB_CHOICES
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from django.conf import settings

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model  = User
        fields = ("id", "email", "full_name", "job_title")

class CustomLoginSerializer(LoginSerializer):
    username = None  # hide it completely

class PreregisterSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        if User.objects.filter(email=value, is_active=True).exists():
            raise serializers.ValidationError("Account already active.")
        return value

    def save(self):
        email = self.validated_data["email"]
        user, created = User.objects.get_or_create(
            email=email,
            defaults={"is_active": False, "full_name": "", "job_title": ""}
        )
        if not created and user.is_active:
            raise serializers.ValidationError("Account already active.")

        # Create or update EmailAddress for the user
        email_address, created_email = EmailAddress.objects.get_or_create(
            user=user,
            email=email,
            defaults={'verified': True, 'primary': True} # Mark as verified and primary
        )
        if not created_email:
            email_address.verified = True # Ensure it's verified if it already existed
            email_address.save()


        uidb64  = urlsafe_base64_encode(force_bytes(user.pk))
        token   = default_token_generator.make_token(user)
        link    = f"{settings.FRONTEND_FINISH_URL}/{uidb64}/{token}/"

        send_mail(
            "Activate your account",
            f"Click to finish registration: {link}",
            settings.DEFAULT_FROM_EMAIL,
            [email],
            fail_silently=False,
        )
        return user


class FinishRegistrationSerializer(serializers.Serializer):
    uidb64    = serializers.CharField()
    token     = serializers.CharField()
    full_name = serializers.CharField(max_length=150)
    job_title = serializers.ChoiceField(choices=JOB_CHOICES)
    password  = serializers.CharField(min_length=8, write_only=True)

    def validate(self, attrs):
        from django.utils.http import urlsafe_base64_decode
        from django.contrib.auth.tokens import default_token_generator

        try:
            uid  = urlsafe_base64_decode(attrs["uidb64"]).decode()
            user = User.objects.get(pk=uid)
        except (ValueError, User.DoesNotExist):
            raise serializers.ValidationError("Invalid link.")

        if not default_token_generator.check_token(user, attrs["token"]):
            raise serializers.ValidationError("Invalid or expired link.")

        attrs["user"] = user
        return attrs

    def save(self):
        user         = self.validated_data["user"]
        user.full_name = self.validated_data["full_name"]
        user.job_title = self.validated_data["job_title"]
        user.set_password(self.validated_data["password"])
        user.is_active = True
        user.save(update_fields=["full_name", "job_title", "password", "is_active"])
        return user