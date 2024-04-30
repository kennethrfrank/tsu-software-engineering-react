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
  id: Number,
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
      'http://localhost:8070/resources',
      {}
    );

    return response;
}