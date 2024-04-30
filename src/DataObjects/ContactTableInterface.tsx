import axios from "axios";

export interface ContactTableRow {
    id: Number,
    EmailAddress: String,
    FirstName: String,
    LastName: String,
    MiddleName: String,
    CreatedBy: String,
    CreatedDate: String,
    ModifiedBy: String,
    ModifiedDate: String,
    IsDeleted: Number
}


export interface ContactTableJsonObject {
    id: Number,
    email_address: String
    first_name: String,
    last_name: String,
    middle_name: String,
    created_by: String,
    created_date: String,
    modified_by: String,
    modified_date: String,
    is_deleted: Number

}
export async function getContactTable() {
    const response = await axios.get(
      'http://localhost:8060/contact',
      {}
    );

    return response;
}