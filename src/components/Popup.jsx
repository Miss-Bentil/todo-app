import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRotateLeft} from "@fortawesome/free-solid-svg-icons";
import "./Popup.css";



function Popup({undo}) {

    let handleundoo = () => {
        undo()
     
    
    }


  return (
    <div className="container wrap">
      <div className="row ">
        <button onClick={handleundoo}>
          <span className="box">
            <FontAwesomeIcon icon={faArrowRotateLeft} className="iconarrow" />
            <div>
              <span className="textdisplay">Undo</span>
              <span style={{ fontSize: "12px" }}>Completed</span>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Popup
