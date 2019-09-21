import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import PropTypes from 'prop-types'

const CardSection = ({ submitOrder, stripeError }) => (
  <div>
    <div>
      <label htmlFor="card-element">Credit or debit card</label>

      <div>
        <fieldset style={{ border: 'none' }}>
          <div className="form-row">
            <div id="card-element" style={{ width: '100%' }}>
              <CardElement
                style={{ width: '100%', base: { fontSize: '18px' } }}
              />
            </div>
            <br />
            <div className="order-button-wrapper">
              <button type="button" onClick={() => submitOrder()}>
                Confirm order
              </button>
            </div>
            {stripeError ? <div>{stripeError.toString()}</div> : null}
            <div id="card-errors" role="alert" />
          </div>
        </fieldset>
      </div>
    </div>
    <style jsx>
      {`
        .order-button-wrapper {
          display: flex;
          width: 100%;
          align-items: flex-end;
          justify-content: flex-end;
        }
      `}
    </style>
  </div>
)

CardSection.propTypes = {
  submitOrder: PropTypes.func.isRequired,
  stripeError: PropTypes.object
}

CardSection.propTypes = {
  stripeError: {}
}

export default injectStripe(CardSection)
