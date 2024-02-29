import React from "react";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleDateString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTaskList);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleDateString()}`,
      };

      setTaskList([...taskList, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          value={task.name || ""}
          placeholder="add task"
          maxLength={25}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        ></input>
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
