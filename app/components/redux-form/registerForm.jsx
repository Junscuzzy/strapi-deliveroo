import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { useTheme } from '@material-ui/core'
import PropTypes from 'prop-types'

import renderTextField from './fields/text'
import Submit from './fields/submit'
import { isMail } from '../../lib/utils'

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

      <Submit />
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
