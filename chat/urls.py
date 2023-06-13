from chat.views import HomeView

from django.urls import path
from chat import views  # This imports views from the current directory (chat)

urlpatterns = [
    path('chat/', views.chat, name='chat'),
]
