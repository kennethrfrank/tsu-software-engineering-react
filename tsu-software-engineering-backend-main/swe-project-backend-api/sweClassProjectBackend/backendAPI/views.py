from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from .serializers import AbcClientSerializer, ContactSerializer, InventorySerializer, AbcResourceSerializer
'''
TODO: Add imports for each serializer
'''
# Create your views here.
class AbcClientViewSet(viewsets.ModelViewSet, APIView):
    """
    API endpoint that allows clients to be viewed.
    """
    queryset = AbcClient.objects.all().order_by('abc_client_id')
    serializer_class = AbcClientSerializer

    def get(self, request, id=None):
        if id:
            # If an id is provided in the GET request, retrieve the client by that id
            try:
            # Check if the todo item the user wants to update exists
                queryset = AbcClient.objects.get(id=id)
            except AbcClient.DoesNotExist:
                # If the todo item does not exist, return an error response
                return Response({'errors': 'This client does not exist.'}, status=400)

            # Serialize todo item from Django queryset object to JSON formatted data
            read_serializer = AbcClientSerializer(queryset)

        else:
            # Get all clients from the database using Django's model ORM
            queryset = AbcClient.objects.all()

            # Serialize list of todos item from Django queryset object to JSON formatted data
            read_serializer = AbcClientSerializer(queryset, many=True)

        # Return a HTTP response object with the list of todo items as JSON
        return Response(read_serializer.data)
    ''' 
    Not needed:
    permission_classes = [permissions.IsAuthenticated]
    '''
    #Add POST API endpoint here (Ayaba)

#Do same as above for other tables

class ContactViewSet(viewsets.ModelViewSet, APIView):
    """
    API endpoint that allows clients to be viewed.
    """
    queryset = Contact.objects.all().order_by('contact_id')
    serializer_class = ContactSerializer

    def get(self, request, id=None):
        if id:
            # If an id is provided in the GET request, retrieve the client by that id
            try:
            # Check if the todo item the user wants to update exists
                queryset = Contact.objects.get(id=id)
            except Contact.DoesNotExist:
                # If the todo item does not exist, return an error response
                return Response({'errors': 'This contact does not exist.'}, status=400)

            # Serialize todo item from Django queryset object to JSON formatted data
            read_serializer = ContactSerializer(queryset)

        else:
            # Get all clients from the database using Django's model ORM
            queryset = Contact.objects.all()

            # Serialize list of todos item from Django queryset object to JSON formatted data
            read_serializer = ContactSerializer(queryset, many=True)

        # Return a HTTP response object with the list of todo items as JSON
        return Response(read_serializer.data)
    ''' 
    Not needed:
    permission_classes = [permissions.IsAuthenticated]
    '''
    #Add POST API endpoint here (Ayaba)


class InventoryViewSet(viewsets.ModelViewSet, APIView):
    """
    API endpoint that allows clients to be viewed.
    """
    queryset = Inventory.objects.all().order_by('inventory_id')
    serializer_class = InventorySerializer

    def get(self, request, id=None):
        if id:
            # If an id is provided in the GET request, retrieve the client by that id
            try:
            # Check if the todo item the user wants to update exists
                queryset = Inventory.objects.get(id=id)
            except Inventory.DoesNotExist:
                # If the todo item does not exist, return an error response
                return Response({'errors': 'This inventory does not exist.'}, status=400)

            # Serialize todo item from Django queryset object to JSON formatted data
            read_serializer = InventorySerializer(queryset)

        else:
            # Get all clients from the database using Django's model ORM
            queryset = Inventory.objects.all()

            # Serialize list of todos item from Django queryset object to JSON formatted data
            read_serializer = InventorySerializer(queryset, many=True)

        # Return a HTTP response object with the list of todo items as JSON
        return Response(read_serializer.data)
    
    ''' 
    Not needed:
    permission_classes = [permissions.IsAuthenticated]
    '''


    #Add POST API endpoint here (Ayaba)
    def post(self, request, id=None):
        Inventory.objects.create(inventory_id = 33)

class AbcResourceViewSet(viewsets.ModelViewSet, APIView):
    """
    API endpoint that allows clients to be viewed.
    """


    queryset = AbcResource.objects.all().order_by('abc_resource_id')
    serializer_class = AbcResourceSerializer

    def get(self, request, id=None):
        if id:
            # If an id is provided in the GET request, retrieve the client by that id
            try:
            # Check if the todo item the user wants to update exists
                queryset = AbcResource.objects.get(id=id)
            except AbcResource.DoesNotExist:
                # If the todo item does not exist, return an error response
                return Response({'errors': 'This inventory does not exist.'}, status=400)

            # Serialize todo item from Django queryset object to JSON formatted data
            read_serializer = AbcResourceSerializer(queryset)

        else:
            # Get all clients from the database using Django's model ORM
            queryset = AbcResource.objects.all()

            # Serialize list of todos item from Django queryset object to JSON formatted data
            read_serializer = AbcResourceSerializer(queryset, many=True)

        # Return a HTTP response object with the list of todo items as JSON
        return Response(read_serializer.data)
    ''' 
    Not needed:
    permission_classes = [permissions.IsAuthenticated]
    '''
    #Add POST API endpoint here (Ayaba)