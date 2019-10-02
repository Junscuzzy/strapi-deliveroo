import React from 'react'
import { CardElement } from 'react-stripe-elements'

import TextField from '@material-ui/core/TextField'

function StripeInput(props) {
  const { component: Component, inputRef, ...other } = props
  const elementRef = React.useRef()

  React.useImperativeHandle(inputRef, () => ({
    focus: () => elementRef.current.focus
  }))

  return (
    <Component onReady={element => (elementRef.current = element)} {...other} />
  )
}

export default function StripeNumberTextField(otherProps) {
  const [errorMessage, setErrorMessage] = React.useState(null)
  function handleElementChange({ complete, error }) {
    if (error) {
      setErrorMessage(error.message)
    } else {
      setErrorMessage(null)
    }
    console.log({ complete })
  }

  const hasError = errorMessage !== null

  return (
    <TextField
      fullWidth
      variant="outlined"
      label="Credit Card Number"
      margin="small"
      error={hasError}
      helperText={hasError ? errorMessage || 'Invalid' : ''}
      onChange={handleElementChange}
      InputLabelProps={{
        shrink: true
      }}
      InputProps={{
        inputProps: {
          component: CardElement
        },
        inputComponent: StripeInput
      }}
      {...otherProps}
    />
  )
}
