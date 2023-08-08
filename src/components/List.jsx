import React from 'react'
import "./Listcss.css"
import Popup from "./Popup.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil,faCircleCheck,faTrashCan } from "@fortawesome/free-solid-svg-icons";

function List({ taskData, deletetask, donetask, edittask, handleundo }) {
  let tasklist = taskData.map((data, index) => {
    let handledelete = () => {
      deletetask(data.id);
     
    };

    let handleDone = () => {
      donetask(data.id);
    
    };

    let handleEdit = () => {
      edittask(data.id);
      
    };

    return (
      <div key={data.id}>
        <div className="task-style styles">
          <div className={data.status ? "check" : ""}>
            <span className="task-number">{index + 1}</span>
            <span className="task-name">{data.name}</span>
          </div>
          <div className="icons">
            {data.status ? null : (
              <FontAwesomeIcon
                title="Edit"
                icon={faPencil}
                className="icon iconedit"
                onClick={handleEdit}
              />
            )}

            <FontAwesomeIcon
              title="Completed/Uncompleted"
              icon={faCircleCheck}
              className="icon iconcheck"
              onClick={handleDone}
            />
            <FontAwesomeIcon
              title="Delete"
              icon={faTrashCan}
              className="icon icondel"
              onClick={handledelete}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {tasklist}
      <Popup undo={handleundo}/>
    </div>
  );
}

export default List
