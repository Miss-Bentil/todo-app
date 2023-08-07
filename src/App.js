import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List.jsx';
import './components/App.css';
import Search from './components/Search';

function App() {
  const [task, setTask] = useState([]);

  let [formType, setFormType] = useState('Add Task');
  let [currentTask, setCurrentTask] = useState('');
  let [temphold, setTempHold] = useState('');
  let [predelete, setPredelete] = useState([]);

  let addTask = (taskobj) => {
    setTask([...task, taskobj]);
  };

  let deleteTask = (id) => {
    let remainingTasks = task.filter((item) => item.id !== id);
    setTask(remainingTasks);
  };

  let doneTask = (id) => {
    let completed = task.map((item) => {
      if (item.id === id) {
        return { ...item, status: true };
      }
      return item;
    });

    setTask(completed);

    //  setPredelete(completed);
    //  console.log(predelete)

    function removeTask() {
      let remainingTaskspostcomp = task.filter((item) => item.id !== id);
      let completed = task.filter((itemcom) => itemcom.id === id);
      let before = task.map((item) => {
        if (item.id === id) {
          return { ...item, status: false };
        }
        return item;
      });

      setPredelete(before);
      setTask(remainingTaskspostcomp);
      setTempHold(completed);
    }

    setTimeout(removeTask, 1000);

    document.querySelector('.wrap').style.visibility = 'visible';
    setTimeout(() => {
      document.querySelector('.wrap').style.visibility = 'hidden';
    }, 2000);
  };

  let handleundo = () => {
    let prevstate = predelete;
    setTask(prevstate);
  };

  let edit = (id) => {
    setFormType('Update Task');
    let taskfill = task.find((task) => {
      return task.id === id;
    });

    setCurrentTask(taskfill);

    console.log(currentTask);
  };

  let update = (taskobj, id) => {
    let newTasks = [...task];
    let index = newTasks.findIndex((task) => task.id === id);
    newTasks[index] = taskobj;

    setTask(newTasks);
    setFormType('Add Task');
  };

  return (
    <div className="App">
      <p className="text-center mt-5 topic">To Do List </p>
      <div className="container m-5 wrapper">
        <div className="row">
          <Search
            addTask={addTask}
            taskData={task}
            formType={formType}
            currentTask={currentTask}
            update={update}
          />
        </div>
        <div className="row">
          <div className="text-center">
            {task && task.length ? '' : 'There are no tasks available ...'}
          </div>
          <div className="list-wrapper
          ">
            <List
              taskData={task}
              deletetask={deleteTask}
              donetask={doneTask}
              edittask={edit}
              handleundo={handleundo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
