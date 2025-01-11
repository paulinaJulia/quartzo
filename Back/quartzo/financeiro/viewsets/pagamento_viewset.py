from rest_framework import filters, viewsets
from rest_framework.permissions import IsAuthenticated

from ..models import Pagamento
from ..serializers import PagamentoSerializer


class PagamentoViewSet(viewsets.ModelViewSet):
    queryset = Pagamento.objects.all()
    serializer_class = PagamentoSerializer
    permission_classes = [IsAuthenticated]

    filter_backends = [filters.SearchFilter]

    search_fields = [
        
    ]
