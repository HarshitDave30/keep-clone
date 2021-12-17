function Task({ task, index, removeTask }) {
  return (
    <div className="box">
      <p>{task.title}</p>
      <i className="fa fa-trash" onClick={() => removeTask(index)}></i>
    </div>
  );
}

export default Task;
