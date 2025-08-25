from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.contrib.auth import get_user_model

User = get_user_model()

class SocialAccountAdapter(DefaultSocialAccountAdapter):
    """
    If an e-mail already exists locally → connect the social login
    instead of creating a duplicate user.
    """
    def populate_user(self, request, sociallogin, data):
        user = super().populate_user(request, sociallogin, data)
        # Overwrite empty fields coming from Google
        user.full_name = data.get("name", "")
        return user

    def pre_social_login(self, request, sociallogin):
        # Link social account to existing user with same email
        email = sociallogin.account.extra_data.get("email")
        if email:
            user = User.objects.filter(email__iexact=email).first()
            if user:
                sociallogin.connect(request, user)
            # The 'pass' block for MultipleObjectsReturned can be removed as .first() won't raise it.
            # The DoesNotExist exception is also implicitly handled by checking if 'user' is not None.