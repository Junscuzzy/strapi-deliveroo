import React from 'react'
import { Container } from 'reactstrap'

import AuthForm from '../components/authForm'

const fields = [
  { name: 'username', type: 'text' },
  { name: 'email', type: 'email' },
  { name: 'password', type: 'password' }
]

export default function SignUp() {
  return (
    <Container>
      <AuthForm fields={fields} title="Sign up" typeform="SIGNUP" />
    </Container>
  )
}
