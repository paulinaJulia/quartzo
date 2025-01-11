from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path
from django.views.generic import RedirectView
from drf_spectacular.views import (SpectacularAPIView, SpectacularRedocView,
                                   SpectacularSwaggerView)
from financeiro.viewsets import ContratoViewSet, PagamentoViewSet
from imovel.viewsets import ImovelViewSet
from rest_framework import routers

main_router = routers.DefaultRouter()

main_router.register(
    "imovel",
    ImovelViewSet,
    "imovel",   
)

main_router.register(
    "contrato",
    ContratoViewSet,
    "contrato",   
)

main_router.register(
    "pagamento",
    PagamentoViewSet,
    "pagamento",   
)


urlpatterns = [
    path("admin/docs/", include("django.contrib.admindocs.urls")),
    path("admin/", admin.site.urls),
    path('', RedirectView.as_view(url='admin/')),
    path("", include("django.contrib.auth.urls")),
    path("", include("home.urls")),
    path("", include("django_app_novadata.urls")),
    path("avatar/", include("avatar.urls")),
    path("advanced_filters/", include("advanced_filters.urls")),
    #
    path("api/", include(main_router.urls)),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "api/docs-swagger/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger",
    ),
    path(
        "api/docs-redoc/",
        SpectacularRedocView.as_view(url_name="schema"),
        name="redoc",
    ),
    path("__reload__/", include("django_browser_reload.urls")),
    path("__debug__/", include("debug_toolbar.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler403 = "home.views.error_403"
handler404 = "home.views.error_404"
handler500 = "home.views.error_500"
