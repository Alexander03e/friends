from django.contrib.auth.base_user import BaseUserManager
from rest_framework.serializers import ValidationError

# Менеджер для создания кастомного (не предоставленного Django) юзера
class CustomUserManager(BaseUserManager):
    # Функция создания пользователя
    def create_user(self, email, full_name, password1, password2, **extra_fields):
        # Валидация полей
        if not full_name:
            raise TypeError('Необходимо имя пользователя')
        if not email:
            raise TypeError('Необходима электронная почта')
        if not password1 or not password2 or password1 != password2:
            raise ValidationError({'password': "Пароли не совпадают"})
        # Создание юзера
        user = self.model(
            email = self.normalize_email(email),
            full_name = full_name,
            **extra_fields
        )
        user.set_password(password1)
        user.save()
        return user

    # Функция создания админа
    def create_superuser(self, email, full_name, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(email, full_name, password1=password, password2=password, **extra_fields)
