import React from 'react'
import { injectStripe } from 'react-stripe-elements'
import { Formik, Field, Form } from 'formik'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import TextInput from './fields/textInput'
import Submit from './fields/submit'
import StripeNumberTextField from './stripeInput'
import Yup from '../../lib/yup'
import { createOrder } from '../../actions/cartActions'

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
  const dispatch = useDispatch()
  const submit = async (values, actions) => {
    actions.setSubmitting(false)
    dispatch(createOrder({ stripe, values }))
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
          render={({ isValid, isSubmitting, isValidating }) => (
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
                  <Submit
                    isValid={isValid && !isSubmitting && !isValidating}
                    label="Order with Stripe"
                  />
                </Grid>
              </Grid>
            </Form>
          )}
        />
      </Box>
    </Paper>
  )
}

CheckoutForm.propTypes = {
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  })
}

CheckoutForm.defaultProps = {
  stripe: {
    createToken: () => {}
  }
}

export default injectStripe(CheckoutForm)
