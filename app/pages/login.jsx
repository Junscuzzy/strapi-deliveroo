import React from 'react'
import { connect } from 'react-redux'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import NextLink from 'next/link'
import PropTypes from 'prop-types'

import LoginForm from '../components/form/loginForm'
import { checkServerSideAuthCookie, login } from '../redux/actions/authActions'
import AuthFormLayout from '../components/form/authFormLayout'

function Login(props) {
  return (
    <AuthFormLayout title="Sign in">
      <LoginForm onSubmit={values => props.login(values)} />
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

Login.propTypes = {
  login: PropTypes.func.isRequired
}

Login.defaultProps = {}

Login.getInitialProps = async ctx => {
  checkServerSideAuthCookie(ctx)
  return {}
}

export default connect(
  state => state,
  { login }
)(Login)
