from rest_framework import serializers

from ..models import Imovel


class ImovelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imovel
        fields = '__all__'

    def validate_valor(self, value):
        if value <= 0:
            raise serializers.ValidationError("O valor do imóvel deve ser maior que zero.")
        return value
