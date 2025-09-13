// src/App.jsx
import React from "react";
import { TodoProvider } from "./context/TodoContext";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <Header />
        <AddTodoForm />
        <TodoList />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </TodoProvider>
  );
}

export default App;
