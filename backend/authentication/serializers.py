from rest_framework import serializers

from .models import User, UserRole, Shift


class UserRoleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserRole
        fields = ['url', 'id', 'name']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    def __init__(self, *args, **kwargs):
        super(UserSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and (request.method == 'POST' or request.method == 'PUT' or request.method == 'PATCH'):
            self.Meta.depth = 0
        else:
            self.Meta.depth = 1

    password1 = serializers.CharField(
        write_only=True,
        required=True,
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
    )
    class Meta:
        model = User
        fields = ['url', 'id', 'password1', 'password2', 'email', 'full_name', 'avatar', 'role', 'shifts']


class ShiftSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shift
        fields = ['url', 'id', 'title', 'cover', 'start_date', 'end_date', 'location']
