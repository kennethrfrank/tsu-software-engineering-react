import axios from "axios";

export interface InvTableRow {
    id: Number,
    abc_client_id: Number,
    InvName: String,
    StorageType: Number,
    MaxCapacity: Number,
    DateCreated: String
}


export interface InvTableJsonObject {
    inventory_id: Number,
    abc_client_id: Number,
    inventory_name: String,
    storage_type_id: Number,
    max_item_capacity: Number,
    date_created: String
}


export async function getInvTable() {
    const response = await axios.get(
      'http://localhost:8000/inventory/?format=json',
      {}
    );

    return response;
}