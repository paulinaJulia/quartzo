from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from import_export.admin import ImportExportModelAdmin

from .profile_inline import ProfileInline

admin.site.unregister(User)


@admin.register(User)
class CustomUserAdmin(ImportExportModelAdmin, UserAdmin):
    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        id = ("id",)
        return id + list_display

    inlines = [ProfileInline]
