import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://56z88f.sse.codesandbox.io/'
})

export const getTodos = () => httpClient.get('/contacts')

export const createNewTodo = values => httpClient.post('/contacts', values)

export const updateTodo = (id, values) =>
  httpClient.patch(`/contacts/${id}`, values)

export const deleteTodo = id => httpClient.delete(`/contacts/${id}`)
