from django.shortcuts import render
from rest_framework import viewsets

from .models import Articles, ArticlesImage
from .serializers import ArticlesSerializer, ArticlesImageSerializer


class ArticlesViewSet(viewsets.ModelViewSet):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer


class ArticlesImageViewSet(viewsets.ModelViewSet):
    queryset = ArticlesImage.objects.all()
    serializer_class = ArticlesImageSerializer
