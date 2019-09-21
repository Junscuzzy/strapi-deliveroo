import React from 'react'
import { Button, Form as BaseForm, FormGroup, Label } from 'reactstrap'
import PropTypes from 'prop-types'

import useForm from '../../hooks/useForm'
import { strapiRegister, strapiLogin } from '../../utils/auth'
import { Header, Input, FormWrapper, Paper } from './style'

export default function Form({ title, fields, typeform, submitLabel }) {
  // Create initialValues object from fields.name
  const initialValues = fields.reduce((acc, { name }) => {
    acc[name] = ''
    return acc
  }, {})

  // hooks
  const { inputs, handleSubmit, handleInputChange } = useForm(
    initialValues,
    () => {
      if (typeform === 'register') {
        strapiRegister(inputs.username, inputs.email, inputs.password)
      } else if (typeform === 'login') {
        strapiLogin(inputs.email, inputs.password)
      }
    }
  )

  return (
    <Paper>
      <Header>
        <h1>{title}</h1>
      </Header>
      <FormWrapper>
        <BaseForm onSubmit={handleSubmit}>
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
                onChange={handleInputChange}
                required
              />
            </FormGroup>
          ))}
          <FormGroup>
            {typeform === 'login' && false && (
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
        </BaseForm>
      </FormWrapper>
    </Paper>
  )
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired,
  typeform: PropTypes.oneOf(['register', 'login']).isRequired,
  submitLabel: PropTypes.string
}

Form.defaultProps = {
  submitLabel: 'Submit'
}
