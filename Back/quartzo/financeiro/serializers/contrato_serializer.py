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
