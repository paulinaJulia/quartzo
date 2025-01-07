from rest_framework import filters, viewsets
from rest_framework.permissions import IsAuthenticated

from ..models import Contrato
from ..serializers import ContratoSerializer


class ContratoViewSet(viewsets.ModelViewSet):
    queryset = Contrato.objects.all()
    serializer_class = ContratoSerializer
    permission_classes = [IsAuthenticated]

    filter_backends = [filters.SearchFilter]

    search_fields = [
        
    ]
