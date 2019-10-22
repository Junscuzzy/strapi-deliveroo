import React from 'react'
import NextLink from 'next/link'

import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

import RegisterForm from '../components/forms/registerForm'
import { checkServerSideAuthCookie } from '../actions/authActions'
import AuthFormLayout from '../components/forms/authFormLayout'

function Register() {
  return (
    <AuthFormLayout title="Register">
      <RegisterForm />
      <Grid container>
        <Grid item>
          <NextLink href="/login">
            <Link variant="body2">Already have an account? Sign in</Link>
          </NextLink>
        </Grid>
      </Grid>
    </AuthFormLayout>
  )
}

Register.getInitialProps = async ctx => {
  checkServerSideAuthCookie(ctx)
  return {}
}

export default Register
