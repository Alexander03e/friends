from rest_framework import serializers
from .models import Articles, ArticlesImage


class ArticlesSerializer(serializers.HyperlinkedModelSerializer):
    def __init__(self, *args, **kwargs):
        super(ArticlesSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and (request.method == 'POST' or request.method == 'PUT' or request.method == 'PATCH'):
            self.Meta.depth = 0
        else:
            self.Meta.depth = 1
    class Meta:
        model = Articles
        fields = ['url', 'id', 'published_at', 'text', 'user', 'images']


class ArticlesImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ArticlesImage
        fields = ['url', 'id', 'image', 'article']
