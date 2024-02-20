import React, { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState();
  const [progress, setProgress] = useState(false);

  const handleChange = (event) => {
    setTaskValue(event.target.value);
  };

  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    console.log(tasks);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task"> Task Name :</label>
        <input
          onChange={handleChange}
          type="text"
          id="task"
          name="task"
          placeholder="Task"
          autoComplete="off"
          value={taskValue}
        ></input>
        <select onChange={(e) => setProgress(e.target.value)}>
          <option value="false">Pendding</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <p>{taskValue}</p>
      </form>
    </section>
  );
};
