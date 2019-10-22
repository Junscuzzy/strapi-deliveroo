import React from 'react'
import { Formik, Field, Form } from 'formik'
import { useDispatch } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import Yup from '../../lib/yup'
import TextInput from './fields/textInput'
import Submit from './fields/submit'
import { login } from '../../actions/authActions'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(8)
    .required()
})

function LoginForm() {
  const dispatch = useDispatch()
  const submit = async (values, actions) => {
    actions.setSubmitting(false)
    dispatch(login(values))
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => submit(values, actions)}
      validationSchema={validationSchema}
      render={({ isValid }) => (
        <Form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Field name="email" label="Email" component={TextInput} />
            </Grid>
            <Grid item xs={12}>
              <Field name="password" label="Password" component={TextInput} />
            </Grid>
            <Grid item xs={12}>
              <Submit isValid={isValid} label="Login" />
            </Grid>
          </Grid>
        </Form>
      )}
    />
  )
}

export default LoginForm
