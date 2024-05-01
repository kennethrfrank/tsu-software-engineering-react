from django.urls import path
from rest_framework import renderers
from . import views
from backendAPI.views import AbcClientViewSet, Contact, Inventory, AbcResource

urlpatterns = [
  path('clients/', views.AbcClientViewSet.as_view({'get': 'list'})),
  path('clients/<int:id>/', views.AbcClientViewSet.as_view({'get': 'list'})),
]

#Add other URLs for APIS here
urlpatterns = [
  path('contacts/', views.ContactViewSet.as_view({'get': 'list'})),
  path('contacts/<int:contact_id>/', views.ContactViewSet.as_view({'get': 'list'})),
]

urlpatterns = [
  path('inventory/', views.InventoryViewSet.as_view({'get': 'list'})),
  path('inventory/<int:inventory_id>/', views.InventoryViewSet.as_view({'get': 'list'})),
]

urlpatterns = [
  path('resource/', views.AbcResourceViewSet.as_view({'get': 'list'})),
  path('resource/<int:resourceid>/', views.AbcResourceViewSet.as_view({'get': 'list'})),
]