from django.http import HttpResponse
from django.template.loader import render_to_string
from django.utils.timezone import now
from rest_framework import filters, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from weasyprint import HTML

from ..models import Pagamento
from ..serializers import PagamentoSerializer


class PagamentoViewSet(viewsets.ModelViewSet):
    queryset = Pagamento.objects.all()
    serializer_class = PagamentoSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]

    filter_backends = [filters.SearchFilter]

    search_fields = [
        
    ]

    @action(detail=False, methods=['get'], url_path='relatorio-pdf', permission_classes=[IsAuthenticated, IsAdminUser])
    def gerar_relatorio_pdf(self, request):
        queryset = self.get_queryset()

        html = render_to_string(
            'admin/relatorio_pagamentos.html',
            {'pagamentos': queryset, 'current_time': now()}
        )
        
        pdf = HTML(string=html).write_pdf()

        response = HttpResponse(pdf, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="relatorio_pagamentos.pdf"'
        return response
