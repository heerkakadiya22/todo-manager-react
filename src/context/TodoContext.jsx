// src/context/TodoContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { loadTodos, saveTodos } from "../utils/localStorage";
import { toast } from "react-toastify";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loaded = loadTodos();
    setTodos(loaded);
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text, dueDate = null, priority = "medium") => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      dueDate,
      priority,
    };
    setTodos([newTodo, ...todos]);
    toast.success("✅ Task added!");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("🗑️ Task deleted!");
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    toast.info("✏️ Task updated!");
  };

  const setPriority = (id, priority) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, priority } : todo
      )
    );
  };

  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setPriority,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
