import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup.string().required().label('First name'),
  lastName: yup.string().required().label('Last name'),
  email: yup.string().email().required().label('Email'),
  jobTitle: yup.string().required().label('Job title'),
  password: yup.string().min(8).required().label('Password'),
  confirmPassword: yup
    .string()
    .min(8)
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .label('Confirm Password'),
});
