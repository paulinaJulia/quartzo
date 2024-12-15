from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path('admin/', admin.site.urls),
    path('', include('django_app_novadata.urls')),
]
