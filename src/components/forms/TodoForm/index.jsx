import { Formik, Form } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../../store/slices/todosSlice';
import { TASK_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import Input from '../Input';
import styles from './TodoForm.module.sass';

function TodoForm ({ createNewTodo }) {
  const initialValues = { task: '' };

  const handleSubmit = (values, formikBag) => {
    createNewTodo(values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TASK_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          type='text'
          name='task'
          placeholder='Enter task here'
          autoFocus
          classes={classes}
        />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewTodo: v => dispatch(createTodo(v)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
