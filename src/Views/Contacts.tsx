import { useEffect, useState } from "react";
import "../App.css";
import {ContactTableRow, ContactTableJsonObject, getContactTable} from "../DataObjects/ContactTableInterface";
import { INIT_RESULT_DATA } from "../DataConstants/ContactTableConstants";




export default function Main() {
    
  const [tableData, setTableData] = useState<ContactTableRow[]>([INIT_RESULT_DATA]);
  const [modalContactData, setmodalContactData] = useState<ContactTableRow>(INIT_RESULT_DATA);
  const [isModalActive, setIsModalActive] = useState<Boolean>(false);


  //A function that supports the creation of the client table.
  function setContactTable(){
    try{
      getContactTable().then(
        function (response: any){
          let ContactTableArray: ContactTableRow[] = [];
          
          //Define the output of my objects to the array.
          response.data.forEach((element: ContactTableJsonObject) => {
            ContactTableArray.push({
              id: (element.id ? element.id : null),
              EmailAddress: (element.email_address ? element.email_address: null),
              FirstName: (element.first_name ? element.first_name : ""),
              LastName: (element.last_name ? element.last_name : null),
              MiddleName: (element.middle_name ? element.middle_name : null),
              CreatedBy: (element.created_by ? element.created_by : null),
              CreatedDate: (element.created_date ? element.created_date : null),
              ModifiedBy: (element.modified_by ? element.modified_by : null),
              ModifiedDate: (element.modified_date ? element.modified_date : null),
              IsDeleted: (element.is_deleted ? element.is_deleted: null)
              // CreatedDate: (element.date_created ? element.date_created : "")
            });
          });


          //Overwrite the table data.
          setTableData(ContactTableArray);
        },
        (error) => {
          console.log(error)
        }
      );
    } catch{}
  } 
  
  function toggleModal() {
    setIsModalActive(!isModalActive);
  }

  function showModal(key: number){
    let ContactRow: ContactTableRow = tableData.at(key);
    setmodalContactData(ContactRow);
    toggleModal();
  }


  const Modal = ({ closeModal, modalState }: { closeModal: any, modalState: boolean }) => {
    if(!modalState) {
      return null;
    }
    
    return(
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <div className="modal-card-head is-radiusless">
            <p className="modal-card-title">Contact Information</p>
            <button className="delete is-pulled-right" aria-label="close" onClick={closeModal}></button>
          </div>
          <section className="modal-card-body columns">
            <div className="column">
              <label className="has-text-weight-medium">Contact ID: </label>
              <p className="mb-3">{(modalContactData.id ? modalContactData.id.toString() : "")}</p>
              { modalContactData.FirstName &&
                <>
                  <label className="has-text-weight-medium">Contact First Name: </label>
                  <p>{(modalContactData.FirstName ? modalContactData.FirstName : "")}</p>
                </>
              }
            </div>
            <div className="column">
              { modalContactData.LastName &&
                <>
                  <label className="has-text-weight-medium">LastName: </label>
                  <p className="mb-3">{(modalContactData.LastName ? modalContactData.LastName.toString() : "")}</p>
                </>
              }
              { modalContactData.MiddleName &&
                <>
                  <label className="has-text-weight-medium">MiddleName: </label>
                  <p className="mb-3">{(modalContactData.MiddleName ? modalContactData.MiddleName.toString() : "")}</p>
                </>
              }
              { modalContactData.CreatedDate &&
                <>
                  <label className="has-text-weight-medium">Date Created: </label>
                  <p>{(modalContactData.CreatedDate ? modalContactData.CreatedDate : "")}</p>
                </>
              }
            </div>
          </section>
        </div>
      </div>
    );
  }


  //The useEffect is a function that runs whenever the set data changes or when loading the page.
  useEffect(() => {
    setContactTable();
  }, []);
  
  return (
    <>
      <h2 className="is-size-2 pb-6 has-text-weight-medium">Contact List</h2>
      <div className="box columns is-centered is-radiusless">
        <div className="column is-12 px-0 py-0"> 
            <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Contact Name</th>
                    <th>Storage Type</th>
                    <th>Max Item Capacity</th>
                    <th>Date Created</th>
                    <th>Client ID</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) =>
                    <tr id={(row.id ? row.id.toString() : "")}>
                      <td>{(row.id ? row.id.toString() : "")}</td>
                      <td>{(row.FirstName ? row.FirstName : "")}</td>
                      <td>{(row.LastName ? row.LastName.toString() : "")}</td>
                      <td>{(row.MiddleName ? row.MiddleName.toString() : "")}</td>
                      <td>{(row.CreatedDate ? row.CreatedDate.toString() : "")}</td>
                      <td><button className="button is-dark" onClick={() => showModal(i)}>View Contact Details</button></td>
                    </tr> 
                  )}
                </tbody>
            </table>
            <Modal
              closeModal={toggleModal}
              modalState={isModalActive.valueOf()}
            />
        </div>
      </div>
    </>
  );
}