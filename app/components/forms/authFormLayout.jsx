import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core'

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Copyright from '../copyright'
import { childrenPropTypes } from '../../lib/utils'

export default function AuthFormLayout({ children, title }) {
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
          {title}
        </Typography>
        {children}
      </Box>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

AuthFormLayout.propTypes = {
  children: childrenPropTypes.isRequired,
  title: PropTypes.string.isRequired
}
