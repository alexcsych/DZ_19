// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { connect } from 'react-redux'
// import { TASK_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas'
// import { createTodo } from '../../../store/slices/todosSlice'
// import styles from './TodoForm.module.sass'

// function TodoForm ({ create }) {
//   const initialValues = { value: '' }

//   const handleSubmit = (values, formikBag) => {
//     create({ ...values, isDone: false })
//     formikBag.resetForm()
//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={TASK_VALIDATION_SCHEMA}
//     >
//       <Form>
//         <Field
//           name='value'
//           type='text'
//           placeholder='Enter task here'
//           autoFocus
//         />
//         <ErrorMessage name='value' component='span' />
//         <button type='submit'>Add</button>
//       </Form>
//     </Formik>
//   )
// }

// const mapDispatchToProps = dispatch => ({
//   create: values => dispatch(createTodo(values))
// })

// export default connect(null, mapDispatchToProps)(TodoForm)

import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { TASK_VALIDATION_SCHEMA } from '../../../utils/validationSchemas'
import { createNewTodo } from '../../../store/slices/todosSlice'
import styles from './TodoForm.module.sass'

function TodoForm ({ create }) {
  const initialValues = { value: '' }

  const handleSubmit = (values, formikBag) => {
    create({ ...values, isDone: false })
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TASK_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Field name='value' type='text' placeholder='Add new task' autoFocus />
        <button type='submit'>Add</button>
        <ErrorMessage name='value' component='span' />
      </Form>
    </Formik>
  )
}

const mapDispatchToProps = dispatch => ({
  create: v => dispatch(createNewTodo(v))
})

export default connect(null, mapDispatchToProps)(TodoForm)
