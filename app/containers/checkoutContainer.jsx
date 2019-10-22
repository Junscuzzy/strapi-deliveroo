import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Elements, StripeProvider } from 'react-stripe-elements'
import Router from 'next/router'

import InjectedCheckoutForm from '../components/forms/checkoutForm'
import { stripeApiKey, stripeUrl } from '../config/api'
import { hasJwt } from '../lib/utils'

function CheckoutFormContainer() {
  const { cart, auth } = useSelector(state => state)
  const [stripe, setStripe] = useState(null)

  // Redirect if user is not logged-in or if cart is empty
  useEffect(() => {
    const isAuth = hasJwt(auth.jwt)
    const itemsCount = cart.items ? cart.items.length : 0
    if (itemsCount === 0 || !isAuth) {
      Router.push('/')
    }
  }, [])

  // Add stripe script if not exists
  useEffect(() => {
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
    <StripeProvider stripe={stripe}>
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    </StripeProvider>
  )
}

export default CheckoutFormContainer
