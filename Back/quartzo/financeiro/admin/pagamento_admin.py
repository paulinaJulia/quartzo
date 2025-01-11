from django.contrib import admin

from ..models import Pagamento


@admin.register(Pagamento)
class PagamentoAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'contrato',
        'usuario',
        'valor_pago',
        'data_pagamento',
    ]

    search_fields = [
        'id',
        'contrato__id',
        'contrato__imovel__endereco',
        'usuario__username',
        'valor_pago',
    ]

    list_filter = [
        'data_pagamento',
    ]

    autocomplete_fields = ['contrato', 'usuario']
