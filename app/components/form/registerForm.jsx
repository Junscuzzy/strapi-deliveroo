import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useTheme } from '@material-ui/core'
import PropTypes from 'prop-types'

import renderTextField from './fields/text'

const isMail = email =>
  email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

const validate = values => {
  const errors = {}
  const requiredFields = ['username', 'email', 'password']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (isMail(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

function RegisterForm(props) {
  const theme = useTheme()
  const { handleSubmit } = props
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: `100%`,
        marginTop: theme.spacing(1)
      }}
    >
      <Field name="username" component={renderTextField} label="Username" />
      <Field name="email" component={renderTextField} label="Email" />
      <Field
        name="password"
        component={renderTextField}
        label="Password"
        type="password"
      />

      <Box m={theme.spacing(3, 0, 2)}>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  )
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm)
