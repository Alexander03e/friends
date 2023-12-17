from rest_framework import routers
from authentication.views import UserViewSet, ShiftViewSet, UserRoleViewSet
from api.views import ArticlesViewSet, ArticlesImageViewSet

router = routers.DefaultRouter()

router.register('users', UserViewSet) 
router.register('user-roles', UserRoleViewSet) 
router.register('shifts', ShiftViewSet)
router.register('articles', ArticlesViewSet)
router.register('article-images', ArticlesImageViewSet)
