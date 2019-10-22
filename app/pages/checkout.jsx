import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Hero from '../components/layout/hero'
import { checkServerSideAuthCookie } from '../actions/authActions'
import { checkServerSideCartCookie } from '../actions/cartActions'
import CartContainer from '../containers/cartContainer'
import CheckoutFormContainer from '../containers/checkoutContainer'

function Checkout() {
  return (
    <Container>
      <Hero
        title="Checkout"
        subTitle="To test paid process use 424242... as card number"
      />
      <Grid container spacing={4}>
        <Grid item sm={4}>
          <CartContainer />
        </Grid>
        <Grid item sm={8}>
          <CheckoutFormContainer />
        </Grid>
      </Grid>
    </Container>
  )
}

Checkout.getInitialProps = async ctx => {
  checkServerSideAuthCookie(ctx) // Check auth
  checkServerSideCartCookie(ctx) // Check cart
  return {}
}

export default Checkout
