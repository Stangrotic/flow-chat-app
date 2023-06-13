from django.urls import path
from chat.views import HomeView, chat  # import both HomeView and chat from the chat/views.py

urlpatterns = [
    path('', HomeView.as_view(), name='home'),  # this will serve as your homepage
    path('chat/', chat, name='chat'),
]
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),  # this includes all URL patterns from api/urls.py
]
