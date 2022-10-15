from ems_backend.views import EmployeeViewSet
from rest_framework.routers import DefaultRouter
from ems_backend import views

router = DefaultRouter()
router.register(r'employees', views.EmployeeViewSet, basename='Employee')
urlpatterns = router.urls 