from map_prod.urls import path
from . import views

urlpatterns = [
    path('', views.my_map, name='map'),
]
