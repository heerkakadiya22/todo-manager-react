// src/App.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { fetchTodos } from "./utils/fetchtodoSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const localTodos = useSelector((state) => state.todos || []);
  const fetchedTodos = useSelector((state) => state.fetchTodos.todos || []);
  const status = useSelector((state) => state.fetchTodos.status);

  useEffect(() => {
    if (status === "idle") dispatch(fetchTodos());
  }, [dispatch, status]);

  const localTodosIds = localTodos.map((t) => t.id);
  const combinedTodos = [...fetchedTodos, ...localTodos];

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      {status === "loading" && <p>Loading todos...</p>}
      <TodoList todos={combinedTodos} localTodosIds={localTodosIds} />
    </div>
  );
}

export default App;
