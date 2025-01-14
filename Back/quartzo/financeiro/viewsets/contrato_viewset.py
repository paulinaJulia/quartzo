from datetime import timedelta

from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.template.loader import render_to_string
from django.utils.timezone import now
from rest_framework import filters, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from weasyprint import HTML

from ..models import Contrato
from ..serializers import ContratoSerializer


class ContratoViewSet(viewsets.ModelViewSet):
    queryset = Contrato.objects.all()
    serializer_class = ContratoSerializer
    permission_classes = [IsAuthenticated]

    filter_backends = [filters.SearchFilter]

    search_fields = [
        
    ]

    @action(detail=True, methods=["get"], url_path="gerar-boleto")
    def gerar_boleto(self, request, pk=None):
        """Gera um boleto em PDF para um contrato."""

        contrato = get_object_or_404(Contrato, pk=pk)
        data_vencimento = now().date() + timedelta(days=5)

        codigo_barras = "12345.67890 12345.678901 23456.789012 3 45670000000000"

        html = render_to_string(
            "financeiro/boleto.html",
            {
                "contrato": contrato,
                "data_vencimento": data_vencimento,
                "codigo_barras": codigo_barras,
            },
        )

        pdf = HTML(string=html).write_pdf()

        response = HttpResponse(pdf, content_type="application/pdf")
        response["Content-Disposition"] = f'attachment; filename="boleto_{contrato.id}.pdf"'
        return response
