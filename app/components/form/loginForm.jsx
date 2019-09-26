import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useTheme } from '@material-ui/core'

import renderTextField from './fields/text'
import asyncValidate from '../../lib/asyncValidate'

const validate = values => {
  const errors = {}
  const requiredFields = ['email', 'password']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

function LoginForm(props) {
  const theme = useTheme()
  const { handleSubmit, pristine, reset, submitting, classes } = props
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: `100%`,
        marginTop: theme.spacing(1)
      }}
    >
      <Field name="email" component={renderTextField} label="Email" />
      <Field
        name="password"
        component={renderTextField}
        label="Password"
        type="password"
      />

      <Box m={theme.spacing(3, 0, 2)}>
        <Button
          type="submit"
          disabled={pristine || submitting}
          fullWidth
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default reduxForm({
  form: 'login',
  validate,
  asyncValidate
})(LoginForm)
