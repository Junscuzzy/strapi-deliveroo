import React from 'react'
import { connect } from 'react-redux'
import NextLink from 'next/link'
import PropTypes from 'prop-types'

import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

import RegisterForm from '../components/redux-form/registerForm'
import { register, checkServerSideAuthCookie } from '../actions/authActions'
import AuthFormLayout from '../components/redux-form/authFormLayout'

function Register(props) {
  return (
    <AuthFormLayout title="Register">
      <RegisterForm onSubmit={values => props.register(values)} />
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

Register.propTypes = {
  register: PropTypes.func.isRequired
}

Register.defaultProps = {}

Register.getInitialProps = async ctx => {
  checkServerSideAuthCookie(ctx)
  return {}
}

export default connect(
  state => state,
  { register }
)(Register)
