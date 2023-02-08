import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://ullhgy.sse.codesandbox.io/'
})

export const getTodoes = () => httpClient.get('/contacts')

export const createNewTodo = values => httpClient.post('/contacts', values)

export const updateTodo = (id, values) =>
  httpClient.patch(`/contacts/${id}`, values)

export const deleteTodo = id => httpClient.delete(`/contacts/${id}`)
