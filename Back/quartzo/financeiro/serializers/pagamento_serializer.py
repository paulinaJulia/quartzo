from rest_framework import serializers

from ..models import Pagamento


class PagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pagamento
        fields = '__all__'

    def validate_valor_pago(self, value):
        if value < 0:
            raise serializers.ValidationError("O valor pago não pode ser negativo.")
        return value
