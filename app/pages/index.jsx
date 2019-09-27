import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getPosts, filterPosts } from '../redux/actions/restaurantActions'
import Search from '../components/restaurant/search'
import RestaurantsList from '../components/restaurant/restaurantsList'
import Hero from '../components/hero'
import { checkServerSideCookie } from '../redux/actions/authActions'

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

Index.getInitialProps = async ctx => {
  await ctx.reduxStore.dispatch(getPosts())
  checkServerSideCookie(ctx) // Check auth
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
