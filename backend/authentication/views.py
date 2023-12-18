from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from django.forms.models import model_to_dict
from .models import User, Shift, UserRole
from .serializers import UserSerializer, ShiftSerializer, UserRoleSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=['post'], detail=False)
    def login(self, request):
        if request.method == 'POST':
            user = authenticate(email=request.data['email'], password=request.data['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    serialized = UserSerializer(user, context={'request': request}).data
                    return Response(serialized)
                else:
                    return Response('Disabled account')
            else:
                return Response('Invalid login')
            
    @action(detail=False, methods=['post'])
    def register(self, request):
        serialized = UserSerializer(data=request.data, context={'request': request})
        if serialized.is_valid():
            user = User.objects.create_user(
                email=request.data['email'],
                full_name=request.data['full_name'],
                password1=request.data['password1'],
                password2=request.data['password2'],
                role=UserRole.objects.get_or_create(name='Пользователь')[0]
            )
            return Response({'message': 'Successed'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)
        
    @action(methods=['patch'], detail=True)
    def add_shift(self, request, pk):
        user = User.objects.get(id=pk)
        print(request.data['shift'].split('/'))
        shift = Shift.objects.get(id=request.data['shift'].split('/')[-2])
        user.shifts.add(shift)
        user.save()
        return Response(UserSerializer(user, context={'request': request}).data)


class UserRoleViewSet(viewsets.ModelViewSet):
    queryset = UserRole.objects.all()
    serializer_class = UserRoleSerializer


class ShiftViewSet(viewsets.ModelViewSet):
    queryset = Shift.objects.all()
    serializer_class = ShiftSerializer
