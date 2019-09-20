import React from 'react'
import { CardText, CardBody, Card, CardTitle } from 'reactstrap'

export default function Cart() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Your order</CardTitle>
        <CardText>Items:</CardText>
        <ul>
          <li>Coming soon</li>
        </ul>
      </CardBody>
    </Card>
  )
}
