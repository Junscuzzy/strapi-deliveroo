import React from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import NextLink from 'next/link'
import { useTheme } from '@material-ui/core'

import LoginForm from '../components/form/loginForm'
import Copyright from '../components/copyright'

function Login() {
  const theme = useTheme()
  return (
    <Container component="main" maxWidth="xs">
      <Box
        mt={8}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar
          style={{
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm />
        <Grid container>
          <Grid item xs>
            <NextLink href="#">
              <Link variant="body2">Forgot password?</Link>
            </NextLink>
          </Grid>
          <Grid item>
            <NextLink href="/register">
              <Link variant="body2">Don't have an account? Sign Up</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

Login.getInitialProps = async ctx => {
  return {}
}

Login.propTypes = {}

Login.defaultProps = {}

export default connect(state => state)(Login)
