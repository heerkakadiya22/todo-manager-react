// src/components/AddTodoForm.jsx
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text, dueDate, priority);
    setText("");
    setDueDate("");
    setPriority("medium");
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="✍️ Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button type="submit">➕ Add Task</button>
    </form>
  );
};

export default AddTodoForm;
