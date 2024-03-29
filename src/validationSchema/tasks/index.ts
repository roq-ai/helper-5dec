import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  project_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
