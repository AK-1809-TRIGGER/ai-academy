from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User
from rest_framework_simplejwt.token_blacklist.admin import (
OutstandingTokenAdmin as BaseOutstandingTokenAdmin,
BlacklistedTokenAdmin as BaseBlacklistedTokenAdmin,
)
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken
from .models import JoinSubmission

@admin.register(JoinSubmission)
class JoinSubmissionAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'course', 'created_at')
    search_fields = ('full_name', 'email', 'course')
    list_filter = ('course', 'created_at')
@admin.register(User)
class UserAdmin(BaseUserAdmin):
	ordering = ["email"]
	list_display = ["email", "full_name", "job_title", "is_staff"]
	fieldsets = (
		(None, {"fields": ("email", "password")}),
		("Personal info", {"fields": ("full_name", "job_title")}),
		("Permissions", {"fields": ("is_staff", "is_superuser", "groups", "user_permissions")}),
	)
	add_fieldsets = (
		(None, {"classes": ("wide",), "fields": ("email", "password1", "password2")}),
	)

# Register SimpleJWT’s admin classes
admin.site.unregister(OutstandingToken)
admin.site.unregister(BlacklistedToken)
admin.site.register(OutstandingToken, BaseOutstandingTokenAdmin)
admin.site.register(BlacklistedToken, BaseBlacklistedTokenAdmin)