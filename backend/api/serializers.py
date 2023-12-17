from rest_framework import serializers
from .models import Articles, ArticlesImage


class ArticlesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Articles
        fields = ['url', 'id', 'published_at', 'text', 'user']


class ArticlesImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ArticlesImage
        fields = ['url', 'id', 'image', 'article']
