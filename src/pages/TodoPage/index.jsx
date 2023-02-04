import React from 'react';
import TodosList from '../../components/TodosList';
import TodoForm from '../../components/forms/TodoForm';
import styles from './TodoPage.module.sass';

function TodoPage () {
  return (
    <section className={styles.conteiner}>
      <h2>Todos</h2>
      <TodoForm />
      <TodosList />
    </section>
  );
}

export default TodoPage;
