import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function Search({ addTask, taskData, formType,currentTask,update }) {
  const [newTask, setNewTask] = useState("");

   useEffect (() => {
      let setTask = () => {
       let newObj = currentTask;
       setNewTask(newObj.name);
      };
      if(currentTask != null){
        setTask();
      }

   }, [currentTask])

   let handleUpdate = () => {
      let taskobj = { name: newTask, status: false, id: uuid() };
      update(taskobj, currentTask.id);
      setNewTask("");
      

   }


 
   let handleAdd = () => {
     if (newTask.trim().length > 0) {
       let taskno = taskData.length + 1;
       let taskobj = { num: taskno, name: newTask, status: false, id: uuid() };
       addTask(taskobj);
       setNewTask("");
     } else {
       return;
     }
   };




    let handleKeyDown = (e) => {
      if (e.key === "Enter" && newTask.trim().length > 0) {
        if (formType === "Add Task") {
          let taskno = taskData.length + 1;
          let taskobj = {
            num: taskno,
            name: newTask,
            status: false,
            id: uuid(),
          };
          addTask(taskobj);
        } else {
          let taskobj = { name: newTask, status: false, id: uuid() };
          update(taskobj, currentTask.id);
        }
        setNewTask("");
      }
    };



  let setformtype = () => {
    return formType === "Add Task" ? (
      <button type="submit" className="btn btn-success" onClick={handleAdd}>
        Add Task
      </button>
    ) : (
      <button type="submit" className="btn btn-success" onClick={handleUpdate} >
        Update Task
      </button>
    );
  };

  return (
    <div>
      <div className="row m-4">
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={newTask}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
        </div>

        <div className="col-auto">{setformtype()}</div>
      </div>
    </div>
  );
}

export default Search;
