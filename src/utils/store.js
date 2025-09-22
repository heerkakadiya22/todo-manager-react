import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import fetchTodoReducer from "./fetchtodoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    fetchTodos: fetchTodoReducer,
  },
});
