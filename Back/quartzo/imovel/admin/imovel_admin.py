from django.contrib import admin

from ..models import Imovel


@admin.register(Imovel)
class ImovelAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'endereco',
        'tipo',
        'status',
    ]

    search_fields = [
        'id',
        'endereco',
        'tipo',
        'status',
    ]

    list_filter = [
        'tipo',
        'status',
    ]

    list_select_related = [
    ]

    autocomplete_fields = [
    ]
