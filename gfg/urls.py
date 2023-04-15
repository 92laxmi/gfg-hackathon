
from django.contrib import admin
from django.urls import path
from Login import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path('',views.SignupPage,name='signup'),
    path('login/',views.LoginPage,name='login'),
    path('home/',views.HomePage,name='home'),
    path('index/',views.indexPage,name='index'),
    path('result/',views.resultPage,name='result'),
    path('logout/',views.LogoutPage,name='logout'),

]
