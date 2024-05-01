import { useEffect, useState } from "react";
import "../App.css";
import {InvTableRow, InvTableJsonObject, getInvTable} from "../DataObjects/InvTableInterface";
import { INIT_RESULT_DATA } from "../DataConstants/InvTableConstants";




export default function Main() {
    
  const [tableData, setTableData] = useState<InvTableRow[]>([INIT_RESULT_DATA]);
  const [modalInvData, setmodalInvData] = useState<InvTableRow>(INIT_RESULT_DATA);
  const [isModalActive, setIsModalActive] = useState<Boolean>(false);


  //A function that supports the creation of the client table.
  function setInvTable(){
    try{
      getInvTable().then(
        function (response: any){
          let invTableArray: InvTableRow[] = [];
          
          //Define the output of my objects to the array.
          response.data.forEach((element: InvTableJsonObject) => {
            invTableArray.push({
              id: (element.inventory_id ? element.inventory_id : null),
              abc_client_id: (element.abc_client_id ? element.abc_client_id: null),
              InvName: (element.inventory_name ? element.inventory_name : ""),
              StorageType: (element.storage_type_id ? element.storage_type_id : null),
              MaxCapacity: (element.max_item_capacity ? element.max_item_capacity : null),
              DateCreated: (element.date_created ? element.date_created : "")
            });
          });


          //Overwrite the table data.
          setTableData(invTableArray);
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
    let invRow: InvTableRow = tableData.at(key);
    setmodalInvData(invRow);
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
            <p className="modal-card-title">Inventory Information</p>
            <button className="delete is-pulled-right" aria-label="close" onClick={closeModal}></button>
          </div>
          <section className="modal-card-body columns">
            <div className="column">
              <label className="has-text-weight-medium">Inventory ID: </label>
              <p className="mb-3">{(modalInvData.id ? modalInvData.id.toString() : "")}</p>
              { modalInvData.InvName &&
                <>
                  <label className="has-text-weight-medium">Inventory Name: </label>
                  <p>{(modalInvData.InvName ? modalInvData.InvName : "")}</p>
                </>
              }
            </div>
            <div className="column">
              { modalInvData.StorageType &&
                <>
                  <label className="has-text-weight-medium">Storage Type: </label>
                  <p className="mb-3">{(modalInvData.StorageType ? modalInvData.StorageType.toString() : "")}</p>
                </>
              }
              { modalInvData.MaxCapacity &&
                <>
                  <label className="has-text-weight-medium">Max Item Capacity: </label>
                  <p className="mb-3">{(modalInvData.MaxCapacity ? modalInvData.MaxCapacity.toString() : "")}</p>
                </>
              }
              { modalInvData.DateCreated &&
                <>
                  <label className="has-text-weight-medium">Number of Contacts: </label>
                  <p>{(modalInvData.DateCreated ? modalInvData.DateCreated : "")}</p>
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
    setInvTable();
  }, []);
  
  return (
    <>
      <h2 className="is-size-2 pb-6 has-text-weight-medium">Inventory List</h2>
      <div className="box columns is-centered is-radiusless">
        <div className="column is-12 px-0 py-0"> 
            <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Inventory Name</th>
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
                      <td>{(row.InvName ? row.InvName : "")}</td>
                      <td>{(row.StorageType ? row.StorageType.toString() : "")}</td>
                      <td>{(row.MaxCapacity ? row.MaxCapacity.toString() : "")}</td>
                      <td>{(row.DateCreated ? row.DateCreated.toString() : "")}</td>
                      <td><button className="button is-dark" onClick={() => showModal(i)}>View Inventory Details</button></td>
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