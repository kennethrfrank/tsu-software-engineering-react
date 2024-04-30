import { useEffect, useState } from "react";
import "../App.css";
import {ResourcesTableRow, ResourcesTableJsonObject, getResourcesTable} from "../DataObjects/ResourcesTableInterface";
import { INIT_RESULT_DATA } from "../DataConstants/ResourcesTableConstants";




export default function Main() {
    
  const [tableData, setTableData] = useState<ResourcesTableRow[]>([INIT_RESULT_DATA]);
  const [modalResourcesData, setmodalResourcesData] = useState<ResourcesTableRow>(INIT_RESULT_DATA);
  const [isModalActive, setIsModalActive] = useState<Boolean>(false);


  //A function that supports the creation of the client table.
  function setResourcesTable(){
    try{
      getResourcesTable().then(
        function (response: any){
          let ResourcesTableArray: ResourcesTableRow[] = [];
          
          //Define the output of my objects to the array.
          response.data.forEach((element: ResourcesTableJsonObject) => {
            ResourcesTableArray.push({
              id: (element.id ? element.id : null),
              ResourceTypeId: (element.resource_type_id ? element.resource_type_id: null),
              ResourceName: (element.resource_name ? element.resource_name : ""),
              MaxNumberOfResources: (element.max_number_of_resources? element.max_number_of_resources : null),
              CurrentNumberOfResources: (element.current_number_of_resources ? element.current_number_of_resources : null),
              CreatedBy: (element.created_by ? element.created_by : null),
              CreatedDate: (element.created_date ? element.created_date : null),
              ModifiedBy: (element.modified_by ? element.modified_by : null),
              ModifiedDate: (element.modified_date ? element.modified_date : null),
              IsDeleted: (element.is_deleted ? element.is_deleted: null),
              InventoryId: (element.inventory_id ? element.inventory_id : null)
            });
          });


          //Overwrite the table data.
          setTableData(ResourcesTableArray);
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
    let ResourcesRow: ResourcesTableRow = tableData.at(key);
    setmodalResourcesData(ResourcesRow);
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
            <p className="modal-card-title">Resources Information</p>
            <button className="delete is-pulled-right" aria-label="close" onClick={closeModal}></button>
          </div>
          <section className="modal-card-body columns">
            <div className="column">
              <label className="has-text-weight-medium">Resources ID: </label>
              <p className="mb-3">{(modalResourcesData.id ? modalResourcesData.id.toString() : "")}</p>
              { modalResourcesData.ResourceName &&
                <>
                  <label className="has-text-weight-medium">Resources Name: </label>
                  <p>{(modalResourcesData.ResourceName ? modalResourcesData.ResourceName : "")}</p>
                </>
              }
            </div>
            <div className="column">
              { modalResourcesData.MaxNumberOfResources &&
                <>
                  <label className="has-text-weight-medium">Max Number of Resources: </label>
                  <p className="mb-3">{(modalResourcesData.MaxNumberOfResources ? modalResourcesData.MaxNumberOfResources.toString() : "")}</p>
                </>
              }
              { modalResourcesData.CurrentNumberOfResources &&
                <>
                  <label className="has-text-weight-medium">Current Number of Resources: </label>
                  <p className="mb-3">{(modalResourcesData.CurrentNumberOfResources ? modalResourcesData.CurrentNumberOfResources.toString() : "")}</p>
                </>
              }
              { modalResourcesData.CreatedDate &&
                <>
                  <label className="has-text-weight-medium">Date Created: </label>
                  <p>{(modalResourcesData.CreatedDate ? modalResourcesData.CreatedDate : "")}</p>
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
    setResourcesTable();
  }, []);
  
  return (
    <>
      <h2 className="is-size-2 pb-6 has-text-weight-medium">Resources List</h2>
      <div className="box columns is-centered is-radiusless">
        <div className="column is-12 px-0 py-0"> 
            <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Resources Name</th>
                    <th>Max # of Resources</th>
                    <th>Current Number of Resources</th>
                    <th>Date Created</th>
                    <th>Resource Details</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) =>
                    <tr id={(row.id ? row.id.toString() : "")}>
                      <td>{(row.id ? row.id.toString() : "")}</td>
                      <td>{(row.ResourceName ? row.ResourceName: "")}</td>
                      <td>{(row.MaxNumberOfResources ? row.MaxNumberOfResources.toString() : "")}</td>
                      <td>{(row.CurrentNumberOfResources ? row.CurrentNumberOfResources.toString() : "")}</td>
                      <td>{(row.CreatedDate ? row.CreatedDate.toString() : "")}</td>
                      <td><button className="button is-dark" onClick={() => showModal(i)}>View Resources Details</button></td>
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