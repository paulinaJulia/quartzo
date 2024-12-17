from django.contrib.auth.models import User
from novadata_utils.serializers import NovadataModelSerializer


class UserSerializer(NovadataModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
