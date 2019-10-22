import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { StripeProvider, Elements } from 'react-stripe-elements'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Hero from '../components/layout/hero'
import { checkServerSideAuthCookie } from '../actions/authActions'
import { checkServerSideCartCookie } from '../actions/cartActions'
import CartContainer from '../containers/cartContainer'
import { hasToken } from '../lib/utils'
import { stripeApiKey, stripeUrl } from '../config/api'
import InjectedCheckoutForm from '../components/forms/checkoutForm'

function Checkout(props) {
  const { cart, auth } = props
  const isAuth = hasToken(auth.token)
  const itemsCount = cart.items ? cart.items.length : 0
  const [stripe, setStripe] = useState(null)

  // Redirect if user is not logged-in or if cart is empty
  useEffect(() => {
    if (itemsCount === 0 || !isAuth) {
      Router.push('/')
    }

    // Load Stripe API
    const tagId = 'stripe-js'
    if (!document.querySelector(`#${tagId}`)) {
      // Create script tag
      const script = document.createElement('script')
      script.async = true
      script.id = tagId
      script.src = stripeUrl
      script.onload = () => {
        setStripe(window.Stripe(stripeApiKey))
      }
      document.head.appendChild(script)
    } else if (window.Stripe) {
      // tag exists, read it
      setStripe(window.Stripe(stripeApiKey))
    }
    return () => {}
  }, [])

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
          <StripeProvider stripe={stripe}>
            <Elements>
              <InjectedCheckoutForm />
            </Elements>
          </StripeProvider>
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

Checkout.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  }),
  auth: PropTypes.shape({
    token: PropTypes.string
  })
}

Checkout.defaultProps = {
  cart: {
    items: []
  },
  auth: {
    token: undefined
  }
}

export default connect(
  state => state,
  null
)(Checkout)
