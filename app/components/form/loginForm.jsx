import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { useTheme } from '@material-ui/core'
import PropTypes from 'prop-types'

import renderTextField from './fields/text'
import Submit from './fields/submit'
import { isMail } from '../../lib/utils'

const validate = values => {
  const errors = {}
  const requiredFields = ['email', 'password']
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

function LoginForm(props) {
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)
