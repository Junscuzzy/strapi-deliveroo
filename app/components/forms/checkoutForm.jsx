import React, { useState } from 'react'
import { injectStripe } from 'react-stripe-elements'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import { useSelector } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import TextInput from './fields/textInput'
import Submit from './fields/submit'
import { apiUrl } from '../../config/api'
import StripeNumberTextField from './stripeInput'
import Yup from '../../lib/yup'

const InjectedInput = injectStripe(StripeNumberTextField)

const initialValues = {
  name: '',
  address: '',
  city: '',
  state: ''
}

const validationSchema = Yup.object({
  name: Yup.string().required(),
  address: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string()
    .min(2)
    .max(2)
    .required()
})

function CheckoutForm({ stripe }) {
  const { items, total } = useSelector(state => state.cart)
  const { token: authToken } = useSelector(state => state.auth)

  const submit = async (values, actions) => {
    actions.setSubmitting(false)

    // Get stripe token
    const { token } = await stripe.createToken({
      name: values.name,
      address_line1: values.address,
      address_city: values.city,
      address_state: values.state
    })

    // Save it in backend
    const response = await axios.post(
      `${apiUrl}/orders`,
      {
        token: token.id,
        ref: token.card.id,
        address: values.address,
        city: values.city,
        amount: total,
        dishes: items
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    )

    if (response.statusText === 'OK') {
      console.log('order created')
      // setCompleted(true)
      // dispatch() Reset card
      // Reset form
      // Router.push()
    }
  }

  return (
    <Paper>
      <Box p={3}>
        <Box pt={1} pb={3}>
          <Typography component="h3" variant="h4">
            Your informations
          </Typography>
        </Box>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => submit(values, actions)}
          validationSchema={validationSchema}
          render={({ isValid }) => (
            <Form>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Field name="name" label="Full name" component={TextInput} />
                </Grid>
                <Grid item xs={12}>
                  <Field name="address" label="Address" component={TextInput} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field name="city" label="City" component={TextInput} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="state" label="State" component={TextInput} />
                </Grid>
                <Grid item xs={12}>
                  <InjectedInput />
                </Grid>
                <Grid item xs={12}>
                  <Submit isValid={isValid} label="Order with Stripe" />
                </Grid>
              </Grid>
            </Form>
          )}
        />
      </Box>
    </Paper>
  )
}

// CheckoutForm.propTypes = {}

export default injectStripe(CheckoutForm)
