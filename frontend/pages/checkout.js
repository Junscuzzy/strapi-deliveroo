import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import { StripeProvider, Elements } from 'react-stripe-elements'
import { compose } from 'recompose'
import Router from 'next/router'
import PropTypes from 'prop-types'

import defaultPage from '../hocs/defaultPage'
import Cart from '../components/cart'
import InjectedCheckoutForm from '../components/checkout/checkoutForm'
import { withContext } from '../components/context/appProvider'
import { stripeApiKey } from '../utils/api'

function Checkout({ context, isAuthenticated }) {
  const [stripe, setStripe] = useState(null)
  const { items } = context
  const itemsCount = items ? items.length : 0

  useEffect(() => {
    if (itemsCount === 0 || !isAuthenticated) {
      Router.push('/')
    }
    setStripe(window.Stripe(stripeApiKey))
    return () => {}
  }, [itemsCount, isAuthenticated])

  if (itemsCount === 0) {
    return <h1>Loading</h1>
  }

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20 }}>Checkout</h1>
        <Cart isAuthenticated={isAuthenticated} />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <StripeProvider stripe={stripe}>
          <Elements>
            <InjectedCheckoutForm context={context} />
          </Elements>
        </StripeProvider>
      </Col>
    </Row>
  )
}

Checkout.propTypes = {
  context: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  isAuthenticated: PropTypes.bool
}

Checkout.defaultProps = {
  isAuthenticated: false
}

export default compose(
  defaultPage,
  withContext
)(Checkout)
