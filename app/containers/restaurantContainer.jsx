import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import slugify from 'slugify'

import { addItem } from '../actions/cartActions'
import DishList from '../components/restaurant/disheslist'
import Hero from '../components/layout/hero'

function RestaurantContainer({ slug }) {
  const { posts } = useSelector(state => state.restaurant)
  const dispatch = useDispatch()

  const restaurant = posts.find(item => slugify(item.name) === slug)
  if (!restaurant) {
    return <div>Error</div>
  }
  const { name, dishes, description } = restaurant
  return (
    <>
      <Hero title={name} subTitle={description} />
      <DishList dishes={dishes} addItem={dish => dispatch(addItem(dish))} />
    </>
  )
}

RestaurantContainer.propTypes = {
  slug: PropTypes.string.isRequired
}

export default RestaurantContainer
