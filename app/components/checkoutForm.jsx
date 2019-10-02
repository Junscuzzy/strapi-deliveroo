import React, { useState } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useSelector } from 'react-redux'
import useTheme from '@material-ui/core/styles/useTheme'

import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import TextInput from './forms/fields/textInput'
import Submit from './forms/fields/submit'
import { apiUrl } from '../config/api'
import StripeNumberTextField from './forms/stripeInput'

const InjectedInput = injectStripe(StripeNumberTextField)

const initialValues = {
  name: '',
  address: '',
  city: '',
  state: ''
}

Yup.setLocale({
  string: {
    min: `Minimum $\{min} letters`,
    max: `Maximum $\{max} letters`
  },
  mixed: {
    required: 'This fielddd is required'
  }
})

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
  const theme = useTheme()
  const { items, total } = useSelector(state => state.cart)
  const { token } = useSelector(state => state.auth)

  const submit = (values, actions) => {
    actions.setSubmitting(false)

    stripe
      .createToken({
        name: values.name,
        currency: 'eur',
        address_line1: values.address,
        address_city: values.city,
        address_state: values.state
      })
      .then(response => {
        console.log({ items, total, values, response })
        // Save it in backend
        axios
          .post(
            `${apiUrl}/orders`,
            {
              ref: response.token.card.id,
              address: values.address,
              city: `${values.city} ${values.state}`,
              amount: total,
              dishes: items
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
          .then(res => {
            console.log({ res })
            actions.resetForm()
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  return (
    <Paper
      style={{
        padding: theme.spacing(3)
      }}
    >
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
    </Paper>
  )
}

// CheckoutForm.propTypes = {}

export default injectStripe(CheckoutForm)
