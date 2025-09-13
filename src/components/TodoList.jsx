// src/components/TodoList.jsx
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#666" }}>
        No todos yet. Add one above! 🚀
      </p>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
