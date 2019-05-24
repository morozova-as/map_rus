"""map_prod URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import re_path, path, include
from map import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('map.urls')),
    re_path('update_place/', views.update_place),
    re_path('get_goods/', views.get_goods),
    re_path('get_place/', views.get_place),
    re_path('get_info/', views.get_info),
    re_path('get_all_names/', views.get_all_names),
    re_path('get_the_same/', views.get_the_same)
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# urlpatterns += patterns('',
#                         (r'^/update_place/$', 'map.views.update_place'),
#                         )
