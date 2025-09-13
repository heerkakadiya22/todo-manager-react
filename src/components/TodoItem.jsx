// src/components/TodoItem.jsx
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { FiEdit2, FiTrash2, FiSave } from "react-icons/fi";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="todo-item">
      {/* ✅ Checkbox for completion */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />

      {/* Editable text */}
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
        />
      ) : (
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      )}

      <div className="todo-meta">
        {todo.dueDate && <span>📅 {todo.dueDate}</span>}
        <span className={`priority ${todo.priority}`}>{todo.priority}</span>
      </div>

      <div className="todo-actions">
        <button onClick={handleEdit}>
          {isEditing ? <FiSave /> : <FiEdit2 />}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
