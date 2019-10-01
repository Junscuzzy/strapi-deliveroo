import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

export default function renderTextField({ label, input, meta, ...custom }) {
  const { touched, invalid, error } = meta
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      autoFocus
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
}
/* eslint-disable react/forbid-prop-types */
renderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
    error: PropTypes.any
  }),
  custom: PropTypes.any
}

renderTextField.defaultProps = {
  label: '',
  input: {},
  meta: {
    touched: false,
    invalid: false,
    error: null
  }
}
