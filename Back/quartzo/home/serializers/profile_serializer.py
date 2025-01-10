from home.models import Profile
from novadata_utils.serializers import NovadataModelSerializer


class ProfileSerializer(NovadataModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"
