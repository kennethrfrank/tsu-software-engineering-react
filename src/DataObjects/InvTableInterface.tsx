import axios from "axios";

export interface InvTableRow {
    id: Number,
    client_id: Number,
    InvName: String,
    StorageType: Number,
    MaxCapacity: Number,
    DateCreated: String
}


export interface InvTableJsonObject {
    id: Number,
    client_id: Number,
    inv_name: String,
    storage_type: Number,
    max_capacity: Number,
    date_created: String
}


export async function getInvTable() {
    const response = await axios.get(
      'http://localhost:8050/inventory',
      {}
    );

    return response;
}