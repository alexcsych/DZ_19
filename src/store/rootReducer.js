import { combineReducers } from '@reduxjs/toolkit'
import todosReducer from './slices/todosSlice'

const rootReducer = combineReducers({
  todosList: todosReducer
})

export default rootReducer
