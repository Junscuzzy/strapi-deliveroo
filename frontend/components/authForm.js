import React, { useState } from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap'
import PropTypes from 'prop-types'

import useForm from '../hooks/useForm'
// import { useAuth } from '../hooks/useAuth'
import { Header, Input, FormWrapper, Paper } from '../utils/formStyle'

export default function AuthForm({ title, fields, typeform, submitLabel }) {
  // Create initialValues object from fields
  const initialValues = fields.reduce((acc, { name }) => {
    acc[name] = ''
    return acc
  }, {})

  // hooks
  // const auth = useAuth()
  const [error, setError] = useState('')
  const { inputs, handleSubmit } = useForm(initialValues, () => {
    if (typeform === 'SIGNUP') {
      // auth.signup(inputs)
    } else if (typeform === 'SIGNIN') {
      // auth.signin(inputs)
    }
    console.log(inputs)
  })

  return (
    <Paper>
      <Header>
        <h1>{title}</h1>
      </Header>
      <FormWrapper>
        {error && <div className="notification">{error}</div>}
        <Form onSubmit={handleSubmit}>
          {fields.map(({ name, type }) => (
            <FormGroup key={name}>
              <Label style={{ textTransform: 'capitalize' }}>
                {`${name}:`}
              </Label>
              <Input
                type={type}
                name={name}
                value={inputs[name]}
                minLength={type === 'password' ? 8 : null}
                required
              />
            </FormGroup>
          ))}
          <FormGroup>
            {typeform === 'SIGNIN' && (
              <a href="">
                <small>Forgot Password?</small>
              </a>
            )}
            <Button
              style={{ float: 'right', width: 120 }}
              color="primary"
              type="submit"
            >
              {submitLabel}
            </Button>
          </FormGroup>
        </Form>
      </FormWrapper>
    </Paper>
  )
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired,
  typeform: PropTypes.oneOf(['SIGNIN', 'SIGNUP']).isRequired,
  submitLabel: PropTypes.string
}

AuthForm.defaultProps = {
  submitLabel: 'Submit'
}
