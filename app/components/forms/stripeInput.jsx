import React from 'react'
import { CardElement } from 'react-stripe-elements'

import TextField from '@material-ui/core/TextField'

function StripeInput(props) {
  const {
    className,
    disabled,
    id,
    onBlur,
    onChange,
    onFocus,
    value,
    component: Component,
    inputRef
  } = props
  const inputProps = {
    className,
    disabled,
    id,
    onBlur,
    onChange,
    onFocus,
    ref: ref => inputRef(ref ? ref.inputElement : null),
    onReady: el => el.focus(),
    value
  }

  return <Component {...inputProps} />
}

export default function StripeNumberTextField() {
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
      margin="normal"
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
    />
  )
}
