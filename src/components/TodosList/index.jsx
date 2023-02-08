import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodo, updateTodo } from '../../store/slices/todosSlice'
import styles from './TodosList.module.sass'

function TodosList ({ todos, isFetching, error, get, remove, update }) {
  useEffect(() => {
    get()
  }, [])

  const isDoneChangeHandler = (id, checked) => {
    update(id, { isDone: checked })
  }

  return (
    <ul className={styles.ul}>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!!ERROR!!!!</div>}
      {!error &&
        todos.map(t => (
          <li key={t.id}>
            <div>
              <input
                type='checkbox'
                checked={t.isDone}
                onChange={({ target: { checked } }) =>
                  isDoneChangeHandler(t.id, checked)
                }
              />
              {t.value}
            </div>
            <button onClick={() => remove(t.id)}>X</button>
          </li>
        ))}
    </ul>
  )
}

const mapStateToProps = ({ todosList }) => todosList

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getTodos()),
  remove: id => dispatch(deleteTodo(id)),
  update: (id, values) => dispatch(updateTodo({ id, values }))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
