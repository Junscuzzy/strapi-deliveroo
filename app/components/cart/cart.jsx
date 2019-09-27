import React from 'react'
import { useSelector } from 'react-redux'
import NextLink from 'next/link'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import useTheme from '@material-ui/core/styles/useTheme'
import Link from '@material-ui/core/Link'

import CardItem from './cartItem'

export default function Cart() {
  const { items, total } = useSelector(state => state.cart)
  const theme = useTheme()
  const { token } = useSelector(state => state.auth)
  const isAuth = typeof token !== 'undefined' && !!token
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
        {items &&
          items.map(
            item => item.quantity > 0 && <CardItem key={item.id} {...item} />
          )}
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

        {total > 0 && (
          <Fade in>
            <ListItem>
              {isAuth ? (
                <NextLink href="/checkout">
                  <Button variant="contained" color="primary" size="large">
                    Go to checkout
                  </Button>
                </NextLink>
              ) : (
                <Typography variant="text2">
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
