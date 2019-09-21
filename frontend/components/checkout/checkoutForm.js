import React, { useState } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { injectStripe } from 'react-stripe-elements'
import Router from 'next/router'
import PropTypes from 'prop-types'

import CardSection from './cardSection'
import { Style } from './checkoutFormStyle'
import { strapi } from '../../utils/api'

function CheckoutForm({ context, stripe }) {
  const [data, setData] = useState({
    address: '',
    city: '',
    state: '',
    stripe_id: ''
  })
  const [error, setError] = useState('')

  function onChange(propertyName, e) {
    data[propertyName] = e.target.value
    setData(data)
  }

  function submitOrder() {
    console.log('onSubmitOrder', context)
    console.log('onSubmitOrder__stripe_token', stripe.createToken())

    stripe
      .createToken()
      .then(res => {
        console.log({ res })
        strapi
          .createEntry('orders', {
            amount: context.total,
            dishes: context.items,
            address: data.address,
            city: data.city,
            state: data.state,
            token: res.token.id
          })
          .then(Router.push('/'))
      })
      .catch(err => {
        setError(err)
        console.log(err)
      })
  }

  return (
    <div className="paper">
      <h5>Your information:</h5>
      <hr />
      <FormGroup style={{ display: 'flex' }}>
        <div style={{ flex: '0.90', marginRight: 10 }}>
          <Label>Address</Label>
          <Input onChange={e => onChange('address', e)} />
        </div>
      </FormGroup>
      <FormGroup style={{ display: 'flex' }}>
        <div style={{ flex: '0.65', marginRight: '6%' }}>
          <Label>City</Label>
          <Input onChange={e => onChange('city', e)} />
        </div>
        <div style={{ flex: '0.25', marginRight: 0 }}>
          <Label>State</Label>
          <Input onChange={e => onChange('state', e)} />
        </div>
      </FormGroup>

      <CardSection
        context={context}
        data={data}
        submitOrder={() => submitOrder()}
      />
      <Style />
    </div>
  )
}

CheckoutForm.propTypes = {
  context: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  }).isRequired
}

export default injectStripe(CheckoutForm)
