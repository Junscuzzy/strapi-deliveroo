import React from 'react'
import { Container } from 'reactstrap'

import Form from '../components/form'
import defaultPage from '../hocs/defaultPage'

const fields = [
  { name: 'username', type: 'text' },
  { name: 'email', type: 'email' },
  { name: 'password', type: 'password' }
]

function Register() {
  return (
    <Container>
      <Form fields={fields} title="Register" typeform="register" />
    </Container>
  )
}

export default defaultPage(Register)
