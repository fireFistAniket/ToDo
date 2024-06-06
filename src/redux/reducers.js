import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to load todos from localStorage
export const loadTodosFromLocalStorage = createAsyncThunk(
  "todos/loadFromLocalStorage",
  async () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log("Loaded todos from localStorage:", storedTodos);
    return storedTodos;
  }
);

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodosFromLocalStorage.fulfilled, (state, action) => {
      state.todos = action.payload;
      console.log("Todos state updated with:", action.payload);
    });
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
