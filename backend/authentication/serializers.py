from rest_framework import serializers

from .models import User, UserRole, Shift


class UserRoleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserRole
        fields = ['url', 'id', 'name']

class UserSerializer(serializers.HyperlinkedModelSerializer):
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
        fields = ['url', 'id', 'password1', 'password2', 'email', 'full_name', 'role', 'shifts']


class ShiftSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shift
        fields = ['url', 'id', 'title', 'cover', 'start_date', 'end_date', 'location']
