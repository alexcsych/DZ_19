import { Formik, Form, Field, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { createTodo } from '../../../store/slices/todosSlice'
import { TASK_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas'
import styles from './TodoForm.module.sass'

function TodoForm ({ create }) {
  const initialValues = { value: '' }

  const handleSubmit = (values, formikBag) => {
    create({ ...values, isBought: false })
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TASK_VALIDATION_SCHEMA}
    >
      <Form>
        <Field
          name='value'
          type='text'
          placeholder='Enter task here'
          autoFocus
        />
        <ErrorMessage name='value' component='span' />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}

const mapDispatchToProps = dispatch => ({
  create: v => dispatch(createTodo(v))
})

export default connect(null, mapDispatchToProps)(TodoForm)
