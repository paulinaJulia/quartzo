from django.contrib import admin
from django.http import HttpResponse
from django.template.loader import render_to_string
from weasyprint import HTML

from ..models import Pagamento


def gerar_relatorio_pdf(modeladmin, request, queryset):
    html = render_to_string(
        'admin/relatorio_pagamentos.html',
        {'pagamentos': queryset}
    )
    pdf = HTML(string=html).write_pdf()

    response = HttpResponse(pdf, content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="relatorio_pagamentos.pdf"'
    return response

@admin.register(Pagamento)
class PagamentoAdmin(admin.ModelAdmin):
    actions = [gerar_relatorio_pdf]
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
