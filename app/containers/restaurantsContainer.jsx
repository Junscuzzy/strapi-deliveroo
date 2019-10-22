import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Search from '../components/search'
import RestaurantsList from '../components/restaurantsList/restaurantsList'
import { filterPosts } from '../actions/restaurantActions'

export default function RestaurantsContainer() {
  const { posts, loading } = useSelector(state => state.restaurant)
  const dispatch = useDispatch()
  const restaurants = posts.filter(p => p.visible)
  return (
    <>
      <Search handleChange={value => dispatch(filterPosts(value))} />
      <RestaurantsList posts={restaurants} loading={loading} />
    </>
  )
}
