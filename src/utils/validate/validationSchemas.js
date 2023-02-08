import * as yup from 'yup'

export const TASK_VALIDATION_SCHEMA = yup.object({
  task: yup
    .string()
    .trim()
    .min(1)
    .max(64)
    .required()
})
