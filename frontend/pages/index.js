import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'

import RestaurantList from '../components/restaurantList'
import Search from '../components/search'

export default function Index() {
  const [query, setQuery] = useState('')
  return (
    <Row>
      <Col>
        <Search query={query} setQuery={val => setQuery(val)} />
        <RestaurantList search={query} />
      </Col>
    </Row>
  )
}
