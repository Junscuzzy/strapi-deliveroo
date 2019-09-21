import React from 'react'
import { CardBody, Card, CardTitle, Badge, Button } from 'reactstrap'
import { compose } from 'recompose'
import Link from 'next/link'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import defaultPage from '../hocs/defaultPage'
import { withContext } from './context/appProvider'

function Cart({ router: { pathname }, context, isAuthenticated }) {
  const { items, addItem, removeItem, total } = context
  return (
    <Card style={{ padding: '10px 5px' }} className="cart">
      <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
      <hr />
      <CardBody style={{ padding: 10 }}>
        <div style={{ marginBottom: 6 }}>
          <small>Items:</small>
        </div>
        <div>
          {items &&
            items.map(item => {
              const { quantity, id, price, name } = item
              return (
                quantity > 0 && (
                  <div
                    className="items-one"
                    style={{ marginBottom: 15 }}
                    key={id}
                  >
                    <div>
                      <span id="item-price">&nbsp; {price}€</span>
                      <span id="item-name">&nbsp; {name}</span>
                    </div>
                    <div>
                      <Button
                        style={{
                          height: 25,
                          padding: 0,
                          width: 15,
                          marginRight: 5,
                          marginLeft: 10
                        }}
                        onClick={() => addItem(item)}
                        color="link"
                      >
                        +
                      </Button>
                      <Button
                        style={{
                          height: 25,
                          padding: 0,
                          width: 15,
                          marginRight: 10
                        }}
                        onClick={() => removeItem(item)}
                        color="link"
                      >
                        -
                      </Button>
                      <span style={{ marginLeft: 5 }} id="item-quantity">
                        {quantity}x
                      </span>
                    </div>
                  </div>
                )
              )
            })}
          {isAuthenticated ? (
            items &&
            items.length > 0 && (
              <div>
                <Badge style={{ width: 200, padding: 10 }} color="light">
                  <h5 style={{ fontWeight: 100, color: 'gray' }}>Total:</h5>
                  <h3>{`${total}€`}</h3>
                </Badge>
                {pathname !== '/checkout' && (
                  <div
                    style={{
                      marginTop: 10,
                      marginRight: 10
                    }}
                  >
                    <Link href="/checkout">
                      <Button style={{ width: '100%' }} color="primary">
                        <a>Order</a>
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            )
          ) : (
            <h5>Login to Order</h5>
          )}
        </div>
      </CardBody>
    </Card>
  )
}

Cart.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  context: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool
}

Cart.defaultProps = {
  isAuthenticated: false
}

export default compose(
  withContext,
  defaultPage,
  withRouter
)(Cart)
