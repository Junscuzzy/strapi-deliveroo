import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Headroom from 'react-headroom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import BaseLink from '@material-ui/core/Link'

export default function Header({ sitename }) {
  const { isAuth } = useSelector(state => state.auth)
  return (
    <Headroom>
      <AppBar position="static" color="primary">
        <Box
          component={Toolbar}
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Link href="/">
            <BaseLink
              color="inherit"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <Typography variant="h6" color="inherit" noWrap>
                {sitename}
              </Typography>
            </BaseLink>
          </Link>
          <nav>
            {isAuth ? (
              <Button color="inherit">Logout</Button>
            ) : (
              <Link href="/login">
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </nav>
        </Box>
      </AppBar>
    </Headroom>
  )
}

Header.propTypes = {
  sitename: PropTypes.string
}

Header.defaultProps = {
  sitename: 'Deliveroo Clone'
}
