import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextInput(props) {
  const {
    label,
    field: { name, value },
    form: { touched, errors, setFieldTouched, handleChange }
  } = props

  function change(name, e) {
    e.persist()
    handleChange(e)
    setFieldTouched(name, true, false)
  }

  return (
    <TextField
      name={name}
      label={label}
      type="text"
      variant="outlined"
      margin="small"
      fullWidth
      autoFocus
      helperText={touched[name] ? errors[name] : ''}
      error={touched[name] && Boolean(errors[name])}
      value={value}
      onChange={e => change(name, e)}
    />
  )
}
