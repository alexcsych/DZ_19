import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as API from '../../api'

const TODOS_SLICE_NAME = 'todos'

export const createNewTodo = createAsyncThunk(
  `todos/create`,
  async (values, thunkAPI) => {
    try {
      const response = await API.createNewTodo(values)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message })
    }
  }
)

export const getTodos = createAsyncThunk(
  `${TODOS_SLICE_NAME}/get`,
  async (payload, thunkAPI) => {
    try {
      const response = await API.getTodos()
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message })
    }
  }
)

export const deleteTodo = createAsyncThunk(
  `${TODOS_SLICE_NAME}/delete`,
  async (payload, thunkAPI) => {
    try {
      await API.deleteTodo(payload)
      return payload
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message })
    }
  }
)

export const updateTodo = createAsyncThunk(
  `${TODOS_SLICE_NAME}/update`,
  async ({ id, values }, thunkAPI) => {
    try {
      const response = await API.updateTodo(id, values)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message })
    }
  }
)

const todosSlice = createSlice({
  name: TODOS_SLICE_NAME,
  initialState: {
    todos: [],
    isFetching: false,
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    // CREATE
    builder.addCase(createNewTodo.pending, state => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(createNewTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload)
      state.isFetching = false
    })
    builder.addCase(createNewTodo.rejected, (state, action) => {
      state.error = action.payload
      state.isFetching = false
    })
    // GET
    builder.addCase(getTodos.pending, (state, action) => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos.push(...action.payload)
      state.isFetching = false
    })
    builder.addCase(getTodos.rejected, (state, action) => {
      state.error = action.payload
      state.isFetching = false
    })
    // DELETE
    builder.addCase(deleteTodo.pending, state => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload)
      state.isFetching = false
    })
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.payload
      state.isFetching = false
    })
    // UPDATE
    builder.addCase(updateTodo.pending, state => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const foundIndex = state.todos.findIndex(t => t.id === action.payload.id)
      state.todos[foundIndex] = action.payload
      state.isFetching = false
    })
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.error = action.payload
      state.isFetching = false
    })
  }
})

const { reducer, actions } = todosSlice

export const {} = actions

export default reducer
