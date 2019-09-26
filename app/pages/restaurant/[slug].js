import React from 'react'
import { connect } from 'react-redux'
import slugify from 'slugify'
import PropTypes from 'prop-types'

import Dish from '../../components/dish'
import { getPosts } from '../../redux/actions/restaurantActions'
import Cart from '../../components/cart'

function RestaurantTemplate({ posts, slug }) {
  const restaurant = posts.find(props => slugify(props.name) === slug)
  if (!restaurant) {
    return <div>Error</div>
  }
  const { name, dishes } = restaurant
  return (
    <>
      <h1>{name}</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', width: `70%` }}>
          {dishes.map(props => (
            <Dish key={props.name} {...props} />
          ))}
        </div>
        <div style={{ width: `30%` }}>
          <Cart />
        </div>
      </div>
    </>
  )
}

RestaurantTemplate.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(getPosts())
  return { slug: query.slug }
}

RestaurantTemplate.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      dishes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired
        })
      )
    })
  ).isRequired,
  slug: PropTypes.string.isRequired
}

export default connect(state => state.restaurant)(RestaurantTemplate)
