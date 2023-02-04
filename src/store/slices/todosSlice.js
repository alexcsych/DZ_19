import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    createTodo (state, action) {
      state.todos.push({
        ...action.payload,
        isDone: false,
        id: uuidv4(),
      });
    },
    deleteTodo (state, action) {
      state.todos = state.todos.filter(c => c.id !== action.payload);
    },

    updateTodo (state, action) {
      const index = state.todos.findIndex(
        item => item.id === action.payload.id
      );
      state.todos[index] = {
        ...state.todos[index],
        ...action.payload.updatedData,
      };
    },
  },
});

const { reducer, actions } = todosSlice;

export const { createTodo, deleteTodo, updateTodo } = actions;

export default reducer;
