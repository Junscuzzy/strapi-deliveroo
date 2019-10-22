import React from 'react'
import NextLink from 'next/link'

import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

import LoginFormik from '../components/forms/loginForm'
import { checkServerSideAuthCookie } from '../actions/authActions'
import AuthFormLayout from '../components/forms/authFormLayout'

function Login() {
  return (
    <AuthFormLayout title="Sign in">
      <LoginFormik />
      <Grid container>
        <Grid item>
          <NextLink href="/register">
            <Link variant="body2">Do not have an account? Sign Up</Link>
          </NextLink>
        </Grid>
      </Grid>
    </AuthFormLayout>
  )
}

Login.getInitialProps = async ctx => {
  checkServerSideAuthCookie(ctx)
  return {}
}

export default Login
