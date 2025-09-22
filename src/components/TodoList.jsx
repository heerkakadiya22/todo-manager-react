// src/components/TodoList.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../utils/todoSlice";

const TodoList = ({ todos, localTodosIds }) => {
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <ul>
      {todos.map((todo) => {
        const isLocal = localTodosIds.includes(todo.id);

        return (
          <li
            key={todo.id}
            className={`${todo.completed ? "completed" : ""} ${
              !isLocal ? "fetched" : ""
            }`}
          >
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(todo.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                {isLocal && (
                  <div>
                    <button
                      className="toggle-btn"
                      onClick={() => dispatch(toggleTodo(todo.id))}
                    >
                      Toggle
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                      Delete
                    </button>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(todo)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
