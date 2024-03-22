// Task.js
import React from "react";

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    const newDescription = prompt("Enter new description:", task.description);
    if (newDescription) {
      onEdit(task.id, newDescription);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      <span>{task.description}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
// ListTask.js
import React from "react";
import Task from "./Task";

const ListTask = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ListTask;
// AddTask.js
import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    onAdd(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task..."
        value={description}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
