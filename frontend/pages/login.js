import React from 'react'
import { Container } from 'reactstrap'

import Form from '../components/form'
import defaultPage from '../hocs/defaultPage'

const fields = [
  { name: 'email', type: 'email' },
  { name: 'password', type: 'password' }
]

function Login() {
  return (
    <Container>
      <Form fields={fields} title="Sign in" typeform="login" />
    </Container>
  )
}

export default defaultPage(Login)
