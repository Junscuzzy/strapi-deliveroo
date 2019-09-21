import React from 'react'
import { Row, Container, Col } from 'reactstrap'
import { useRouter, withRouter } from 'next/router'
import slugify from 'slugify'
import { compose } from 'recompose'
import PropTypes from 'prop-types'

import useFetch from '../../hooks/useFetch'
import { restaurantsURL } from '../../utils/api'
import Dish from '../../components/dish'
import Cart from '../../components/cart'
import defaultPage from '../../hocs/defaultPage'

function RestaurantTemplate({ isAuthenticated }) {
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
        <Col className="col-8-sm">
          <Row>
            {dishes.map(props => (
              <Dish key={props.name} {...props} />
            ))}
          </Row>
        </Col>
        <Col className="col-4 d-none d-sm-block">
          <Cart isAuthenticated={isAuthenticated} />
        </Col>
      </Row>
    </Container>
  )
}

RestaurantTemplate.propTypes = {
  isAuthenticated: PropTypes.bool
}

RestaurantTemplate.defaultProps = {
  isAuthenticated: false
}

export default compose(
  defaultPage,
  withRouter
)(RestaurantTemplate)
