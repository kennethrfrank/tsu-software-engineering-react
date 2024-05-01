from rest_framework import serializers
from .models import *

class AbcClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = AbcClient
        fields = [ 'abc_client_id',
                   'client_name',
                   'company_address',
                   'phone_number',
                   'created_by',
                   'created_date',
                   'modified_by',
                   'modified_date',
                   'is_deleted',
                ]

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = [ 
            "contact_id",
    "email_address",
    "first_name",
    "last_name",
    "middle_name",
    "created_by",
    "created_date",
    "modified_by",
    "modified_date",
    "is_deleted"
                ]

class InventorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Inventory
        fields = [ 
            "inventory_id",
             "abc_client_id",
            "inventory_name",
            "storage_type_id",
            "max_item_capacity",
             "created_date" 


                ]
        
class AbcResourceSerializer(serializers.ModelSerializer):

    class Meta:
        model = AbcResource
        fields = [ 
            "abc_resource_id",
            "inventory_id",
            "resource_type_id",
            "resource_name",
            "max_number_of_resources",
            "current_number_of_resources",
            "created_by",
            "created_date",
            "modified_by",
            "modified_date",
            "is_deleted"


                ]
        

#Do same for other tables