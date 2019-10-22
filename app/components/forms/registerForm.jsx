import React from 'react'
import { Formik, Field, Form } from 'formik'
import { useDispatch } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import TextInput from './fields/textInput'
import Submit from './fields/submit'
import Yup from '../../lib/yup'
import { register } from '../../actions/authActions'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  username: Yup.string()
    .min(6)
    .required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(8)
    .required()
})

function RegisterForm() {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => dispatch(register(values))}
      validationSchema={validationSchema}
      render={({ isValid }) => (
        <Form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Field name="username" label="Username" component={TextInput} />
            </Grid>
            <Grid item xs={12}>
              <Field name="email" label="Email" component={TextInput} />
            </Grid>
            <Grid item xs={12}>
              <Field name="password" label="Password" component={TextInput} />
            </Grid>
            <Grid item xs={12}>
              <Submit isValid={isValid} label="Register" />
            </Grid>
          </Grid>
        </Form>
      )}
    />
  )
}

export default RegisterForm
