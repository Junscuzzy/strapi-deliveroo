import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getPosts, filterPosts } from '../redux/actions/restaurantActions'
import Search from '../components/search'
import RestaurantsList from '../components/restaurantsList'
import Hero from '../components/hero'

function Index(props) {
  const { posts } = props
  const restaurants = posts.filter(p => p.visible)
  return (
    <>
      <Hero
        title="Deliveroo Clone"
        subTitle="A deliveroo Clone using React, Next.js, Redux & Material-ui as front-end and Strapi CMS (node.js) & Stripe as backend"
      />
      <Search setQuery={val => props.filterPosts(val)} />
      <RestaurantsList posts={restaurants} />
    </>
  )
}

Index.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getPosts())
  return {}
}

Index.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  filterPosts: PropTypes.func.isRequired
}

Index.defaultProps = {
  posts: []
}

export default connect(
  state => state.restaurant,
  { filterPosts }
)(Index)
