import React from 'react'
import { Row, Container, Col } from 'reactstrap'
import { useRouter } from 'next/router'
import slugify from 'slugify'

import useFetch from '../../hooks/useFetch'
import { restaurantsURL } from '../../utils/api'
import Dish from '../../components/dish'
import Cart from '../../components/cart'

export default function RestaurantTemplate() {
  const router = useRouter()
  const { slug } = router.query
  const [data, loading] = useFetch(restaurantsURL)

  if (loading) {
    return <div>...Loading</div>
  }

  const { name, dishes } = data.filter(props => slugify(props.name) === slug)[0]
  return (
    <Container>
      <br />
      <h1>{name}</h1>
      <br />
      <Row>
        <Col className="col-8">
          <Row>
            {dishes.map(props => (
              <Dish key={props.name} {...props} />
            ))}
          </Row>
        </Col>
        <Col className="col-4">
          <Cart />
        </Col>
      </Row>
    </Container>
  )
}