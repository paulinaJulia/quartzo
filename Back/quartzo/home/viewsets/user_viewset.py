from django.contrib.auth.models import User
from home.serializers import UserSerializer
from novadata_utils.viewsets import NovadataModelViewSet


class UserViewSet(NovadataModelViewSet):
    queryset = User.objects.all()

    serializer_class = UserSerializer

    search_fields = []
