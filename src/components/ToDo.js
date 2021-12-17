import React, { useState } from "react";
import CreateTask from "./CreateTask";
import Task from "./Task";

function ToDo() {
  const [tasks, setTasks] = useState([
    {
      title: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
    },
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title }];
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const [darkmode, setDarkmode] = useState("false");

  const DarkModeClick = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div className={`${darkmode ? "" : "active"}`}>
      <div className="navigationbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4 className="m-0">
                <i className="fa fa-bars"></i> Keep
              </h4>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-end align-items-center">
                <h4 className="m-0">
                  <i className="fa fa-cog" onClick={DarkModeClick}></i>
                </h4>
                <div className="avatar">
                  <img
                    src="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notes">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <CreateTask addTask={addTask} />
            </div>
            <div className="col-lg-12">
              <div className="row">
                {tasks.map((task, index) => (
                  <div className="col-lg-4" key={index}>
                    <Task task={task} removeTask={removeTask} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
