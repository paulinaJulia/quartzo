from rest_framework import filters, viewsets
from rest_framework.permissions import IsAuthenticated

from ..models import Imovel
from ..serializers import ImovelSerializer


class ImovelViewSet(viewsets.ModelViewSet):
    queryset = Imovel.objects.all()
    serializer_class = ImovelSerializer
    permission_classes = [IsAuthenticated]

    filter_backends = [filters.SearchFilter]

    search_fields = [
        
    ]
