from django.urls import path
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.conf import settings
from dj_rest_auth.views import LogoutView
from .views import (
    PreregisterView,
    CompleteRegistrationView,
    LoginView,
)
from .views import join_submit
class GoogleLogin(SocialLoginView):
    adapter_class   = GoogleOAuth2Adapter
    client_class    = OAuth2Client
    callback_url    = settings.GOOGLE_CALLBACK_URL

urlpatterns = [
    path("preregister/",  PreregisterView.as_view(),         name="preregister"),
    path("complete/",     CompleteRegistrationView.as_view(), name="complete-reg"),
    path("login/",        LoginView.as_view(),               name="rest_login"),  
]
urlpatterns = [
    path('api/join/', join_submit, name='join-submit'),
]
urlpatterns += [
    path("google/", GoogleLogin.as_view(), name="google_login"),
    path("logout/", LogoutView.as_view(), name="rest_logout"),
]