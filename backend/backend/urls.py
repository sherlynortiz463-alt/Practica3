from django.contrib import admin
from django.urls import path
from loginapp.views import login_view, register_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', login_view, name='login'),
    path('register/', register_view, name='register'),
]
from django.contrib import admin
from django.urls import path
from loginapp.views import login_view, register_view, obtener_cultivos

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', login_view, name='login'),
    path('register/', register_view, name='register'),
    path('cultivos/', obtener_cultivos, name='cultivos'),
]
