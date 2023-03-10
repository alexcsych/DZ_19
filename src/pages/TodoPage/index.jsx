import TodosList from '../../components/TodosList/index'
import TodoForm from '../../components/forms/TodoForm/index'
import styles from './TodoPage.module.sass'

function TodoPage () {
  return (
    <section className={styles.conteiner}>
      <h1>Todos</h1>
      <TodoForm />
      <TodosList />
    </section>
  )
}

export default TodoPage
