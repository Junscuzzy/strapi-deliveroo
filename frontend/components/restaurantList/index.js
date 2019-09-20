import React from 'react'
import { Row } from 'reactstrap'
import PropTypes from 'prop-types'

import useFetch from '../../hooks/useFetch'
import Restaurant from './restaurant'

export default function RestaurantList({ search }) {
  const [restaurants, loading] = useFetch('http://localhost:1337/restaurants')
  const searchQuery = restaurants.filter(node =>
    node.name.toLowerCase().includes(search)
  )
  return (
    <Row>
      {loading && '...loading'}
      {searchQuery.length !== 0
        ? searchQuery.map(node => <Restaurant key={node.id} {...node} />)
        : 'No restaurants found'}
    </Row>
  )
}

RestaurantList.propTypes = {
  search: PropTypes.string
}

RestaurantList.defaultProps = {
  search: ''
}
