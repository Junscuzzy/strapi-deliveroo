import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Search from '../components/search'
import RestaurantsList from '../components/restaurantsList'
import Hero from '../components/hero'
import { checkServerSideAuthCookie } from '../actions/authActions'
import { checkServerSideCartCookie } from '../actions/cartActions'
import { filterPosts, getPosts } from '../actions/restaurantActions'

function Index(props) {
  const { posts, loading } = props
  const restaurants = posts.filter(p => p.visible)
  return (
    <>
      <Hero
        title="Deliveroo Clone"
        subTitle="A deliveroo Clone using React, Next.js, Redux & Material-ui as front-end and Strapi CMS (node.js) & Stripe as backend"
      />
      <Search handleChange={value => props.filterPosts(value)} />
      <RestaurantsList posts={restaurants} loading={loading} />
    </>
  )
}

Index.getInitialProps = async ctx => {
  await ctx.reduxStore.dispatch(getPosts())
  checkServerSideAuthCookie(ctx) // Check auth
  checkServerSideCartCookie(ctx) // Check cart
  return {}
}

Index.propTypes = {
  filterPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool
}

Index.defaultProps = {
  posts: [],
  loading: true
}

export default connect(
  state => state.restaurant,
  { filterPosts }
)(Index)
