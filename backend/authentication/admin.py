from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Shift, UserRole
from .forms import UserCreationForm, UserChangeForm


class UserAdmin(BaseUserAdmin):
    # Меняет формы добавления и изменения на кастомные
    form = UserChangeForm
    add_form = UserCreationForm
    # Различные настройки отображения User-а в админке
    list_display = ('email', 'full_name', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('full_name', 'avatar', 'shifts', 'role')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser')}),
        ('Time manage', {'fields': ('last_login',)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'full_name', 'password1', 'password2')}
        ),
    )
    ordering = ('email',)  


admin.site.register(User, UserAdmin)
admin.site.register(UserRole)
admin.site.register(Shift)
