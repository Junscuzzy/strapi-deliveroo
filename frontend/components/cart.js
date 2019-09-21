import React from 'react'
import {
  CardText,
  CardBody,
  Card,
  CardTitle,
  Badge,
  Button,
  CardSubtitle
} from 'reactstrap'
import { compose } from 'recompose'
import Link from 'next/link'
import { withRouter } from 'next/router'

import defaultPage from '../hocs/defaultPage'
import { withContext } from './context/appProvider'

function Cart(props) {
  const { router, context, isAuthenticated } = props
  const { items } = context
  console.log(props)
  return (
    <Card style={{ padding: '10px 5px' }} className="cart">
      <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
      <hr />
      <CardBody style={{ padding: 10 }}>
        <div style={{ marginBottom: 6 }}>
          <small>Items:</small>
        </div>
        <div>
          {items
            ? items.map(item => {
                if (item.quantity > 0) {
                  return (
                    <div
                      className="items-one"
                      style={{ marginBottom: 15 }}
                      key={item.id}
                    >
                      <div>
                        <span id="item-price">&nbsp; {item.price}€</span>
                        <span id="item-name">&nbsp; {item.name}</span>
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
                          onClick={() => context.addItem(item)}
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
                          onClick={() => context.removeItem(item)}
                          color="link"
                        >
                          -
                        </Button>
                        <span style={{ marginLeft: 5 }} id="item-quantity">
                          {item.quantity}x
                        </span>
                      </div>
                    </div>
                  )
                }
              })
            : null}
          {isAuthenticated ? (
            items && items.length > 0 ? (
              <div>
                <Badge style={{ width: 200, padding: 10 }} color="light">
                  <h5 style={{ fontWeight: 100, color: 'gray' }}>Total:</h5>
                  <h3>${context.total}</h3>
                </Badge>
                {router.pathname !== '/checkout' ? (
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
                ) : null}
              </div>
            ) : null
          ) : (
            <h5>Login to Order</h5>
          )}
        </div>
      </CardBody>
    </Card>
  )
}

export default compose(
  withContext,
  defaultPage,
  withRouter
)(Cart)
