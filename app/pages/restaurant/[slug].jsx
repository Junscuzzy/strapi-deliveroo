import React from 'react'
import PropTypes from 'prop-types'

import { getPosts } from '../../actions/restaurantActions'
import { checkServerSideAuthCookie } from '../../actions/authActions'
import { checkServerSideCartCookie } from '../../actions/cartActions'
import RestaurantContainer from '../../containers/restaurantContainer'

function RestaurantTemplate({ slug }) {
  return <RestaurantContainer slug={slug} />
}

RestaurantTemplate.getInitialProps = async ctx => {
  const { reduxStore, query } = ctx
  await reduxStore.dispatch(getPosts())
  checkServerSideAuthCookie(ctx) // Check auth
  checkServerSideCartCookie(ctx) // Check cart
  return { slug: query.slug }
}

RestaurantTemplate.propTypes = {
  slug: PropTypes.string.isRequired
}

export default RestaurantTemplate
