from django.urls import include, path
from home import views, viewsets
from home.views import LoginView, RegisterView
from rest_framework import routers

home_router = routers.DefaultRouter()
home_router.register(
    "user",
    viewsets.UserViewSet,
    basename="user",
)

home_router.register(
    "profile",
    viewsets.ProfileViewSet,
    basename="profile",
)

urlpatterns = [
    path("home/api/", include(home_router.urls)),
    path("", views.home, name="home"),
    path("design_system/", views.design_system, name="design_system"),
    path("svg_viewer/", views.svg_viewer, name="svg_viewer"),
    path('user_register/', RegisterView.as_view(), name='register'),
    path('user_login/', LoginView.as_view(), name='login'),
]
