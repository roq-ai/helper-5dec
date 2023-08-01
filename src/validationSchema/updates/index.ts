import * as yup from 'yup';

export const updateValidationSchema = yup.object().shape({
  content: yup.string().required(),
  task_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
