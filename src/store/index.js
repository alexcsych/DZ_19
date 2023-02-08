import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/todosSlice'

const store = configureStore({
  reducer: {
    todosList: todosReducer
  }
})

export default store
