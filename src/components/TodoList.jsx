import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../utils/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
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
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
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
              <div>
                <button
                  className="toggle-btn"
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  Toggle
                </button>
                <button className="edit-btn" onClick={() => handleEdit(todo)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
