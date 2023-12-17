from django.db import models
from authentication.models import User
    

class Articles(models.Model):
    published_at = models.DateTimeField(verbose_name='Дата публикации', auto_now_add=True)
    text = models.TextField(verbose_name='Текст')
    user = models.ForeignKey(verbose_name='Пользователь', to=User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'

    def __str__(self):
        return self.user.full_name


class ArticlesImage(models.Model):
    image = models.ImageField(verbose_name='Изображение', upload_to='articles/images')
    article = models.ForeignKey(verbose_name='Пост', to=Articles, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Изображение'
        verbose_name_plural = 'Изображения'

    def __str__(self):
        return str(self.image)
