import axios from "axios";

export interface ResourcesTableRow {
    id: Number,
  InventoryId: Number,
  ResourceTypeId: Number,
  ResourceName: String,
  MaxNumberOfResources: Number,
  CurrentNumberOfResources: Number,
  CreatedBy: String,
  CreatedDate: String,
  ModifiedBy: String,
  ModifiedDate: String,
  IsDeleted: Number,
}


export interface ResourcesTableJsonObject {
  abc_resource_id: Number,
  inventory_id: Number,
  resource_type_id: Number,
  resource_name: String,
  max_number_of_resources: Number,
  current_number_of_resources: Number,
  created_by: String,
  created_date: String,
  modified_by: String,
  modified_date: String,
  is_deleted: Number,
}


export async function getResourcesTable() {
    const response = await axios.get(
      'http://localhost:8000/resource/?format=json',
      {}
    );

    return response;
}

export async function postResourcesTable(){
  const response = await axios.post('http://localhost:8000/resource/',
    {
      resource_name: "yo",

      inventory_id: 33,
      max_number_of_resources: 2,
      current_number_of_resources: 
        2
    ,
    created_by: 
        "Me"
    ,
    created_date: 
        "2024-04-30T19:53:24Z"
    ,
    is_deleted: 
        1
    
    }
  )
}