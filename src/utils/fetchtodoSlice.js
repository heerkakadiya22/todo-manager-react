// src/utils/fetchtodoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch todos from JSONPlaceholder
export const fetchTodos = createAsyncThunk(
  "fetchTodos/fetchTodos",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const data = await response.json();
    return data.map((todo) => ({
      id: todo.id,
      text: todo.title,
      completed: todo.completed,
    }));
  }
);

const fetchTodoSlice = createSlice({
  name: "fetchTodos",
  initialState: { todos: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchTodoSlice.reducer;
