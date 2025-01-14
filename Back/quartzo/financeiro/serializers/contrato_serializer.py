from django.utils.timezone import now
from rest_framework import serializers

from ..models import Contrato


class ContratoSerializer(serializers.ModelSerializer):
    cliente_name = serializers.SerializerMethodField()
    class Meta:
        model = Contrato
        fields = '__all__'

    def get_cliente_name(self,obj):
        if obj.cliente:
            return obj.cliente.get_full_name() if obj.cliente.get_full_name() else obj.cliente.username

    def validate_valor(self, value):
        if value < 0:
            raise serializers.ValidationError("O valor não pode ser negativo.")
        return value
    
    def validate(self, data):
        """
        Valida se o contrato está dentro da data de validade para ser renovado.
        """
        if data.get("status") == "ativo" and data.get("data_fim") and now().date() > data["data_fim"]:
            raise serializers.ValidationError(
                "Não é possível renovar este contrato porque está fora do período de validade."
            )

        if data.get("data_inicio") and data.get("data_fim") and data["data_inicio"] > data["data_fim"]:
            raise serializers.ValidationError(
                "A data de início não pode ser posterior à data de fim."
            )

        return data
