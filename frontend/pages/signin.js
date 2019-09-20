import React from 'react'
import { Container } from 'reactstrap'

import AuthForm from '../components/authForm'

const fields = [
  { name: 'email', type: 'email' },
  { name: 'password', type: 'password' }
]

export default function Signin() {
  return (
    <Container>
      <AuthForm fields={fields} title="Sign in" typeform="SIGNIN" />
    </Container>
  )
}
