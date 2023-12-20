from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from .managers import CustomUserManager


class Shift(models.Model):
    title = models.CharField(verbose_name='Название', max_length=255)
    cover = models.ImageField(verbose_name='Изображение', upload_to='shifts')
    start_date = models.DateField(verbose_name='Дата начала')
    end_date = models.DateField(verbose_name='Дата конца')
    location = models.CharField(verbose_name='Локация', max_length=255)

    class Meta:
        verbose_name = 'Смена'
        verbose_name_plural = 'Смены'

    def __str__(self):
        return self.title
    

class UserRole(models.Model):
    name = models.CharField(verbose_name='Название', max_length=255)
    
    class Meta:
        verbose_name = 'Роль'
        verbose_name_plural = 'Роли'

    def __str__(self):
        return self.name

# Кастомная модель юзера наследующая классы AbstractBaseUser и PermissionMixin
class User(AbstractBaseUser, PermissionsMixin):
    username = None
    avatar = models.ImageField(verbose_name='Аватарка', upload_to='users/avatars', null=True, blank=True)
    full_name = models.CharField(verbose_name='ФИО', max_length=255)
    email = models.EmailField(verbose_name='Email', unique=True)
    shifts = models.ManyToManyField(verbose_name='Смены', to=Shift, blank=True)
    role = models.ForeignKey(verbose_name='Роль', to=UserRole, null=True, on_delete=models.PROTECT)

    is_active = models.BooleanField(verbose_name='Активирован', default=True)
    is_staff = models.BooleanField(verbose_name='Персонал', default=False)
    is_superuser = models.BooleanField(verbose_name='Администратор', default=False)

    # Поле, использующееся для логина
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    objects = CustomUserManager()

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
    
    def __str__(self):
        return str(self.email)
