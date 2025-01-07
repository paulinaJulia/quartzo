from django.contrib import admin

from ..models import Contrato


@admin.register(Contrato)
class ContratoAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'imovel',
        'cliente',
        'status',
    ]

    search_fields = [
        'id',
        'imovel',
        'forma_pagamento',
        'cliente',
    ]

    list_filter = [
        'forma_pagamento',
        'status',
    ]

    autocomplete_fields = ['cliente','imovel',]

