import React from 'react'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import useTheme from '@material-ui/core/styles/useTheme'
import { useRouter } from 'next/router'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import Link from '@material-ui/core/Link'

import { childrenPropTypes } from '../../lib/utils'

export default function CartLayout(props) {
  const { children, total, isAuth } = props
  const { pathname } = useRouter()
  const isCheckout = pathname !== '/checkout'
  const theme = useTheme()
  return (
    <Card>
      <List>
        <ListItem>
          <Typography
            variant="h4"
            component="h3"
            style={{
              padding: theme.spacing(2, 0)
            }}
          >
            Your cart
          </Typography>
        </ListItem>
        <Divider />
        {children}
        <Divider />
        <ListItem>
          <Typography
            variant="h5"
            component="h3"
            style={{
              padding: theme.spacing(2, 0, 2)
            }}
          >
            {`Total: ${total || 0}€`}
          </Typography>
        </ListItem>

        {isCheckout && total > 0 && (
          <Fade in>
            <ListItem>
              {isAuth ? (
                <NextLink href="/checkout">
                  <Button variant="contained" color="primary" size="large">
                    Go to checkout
                  </Button>
                </NextLink>
              ) : (
                <Typography variant="body2">
                  You must be logged-in to order.
                  <NextLink href="/login">
                    <Link variant="body2"> Sign in</Link>
                  </NextLink>
                </Typography>
              )}
            </ListItem>
          </Fade>
        )}
      </List>
    </Card>
  )
}

CartLayout.propTypes = {
  children: childrenPropTypes.isRequired,
  total: PropTypes.number,
  isAuth: PropTypes.bool
}

CartLayout.defaultProps = {
  total: 0,
  isAuth: false
}
