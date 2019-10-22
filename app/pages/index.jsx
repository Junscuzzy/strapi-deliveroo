import React from 'react'

import Hero from '../components/layout/hero'
import { checkServerSideAuthCookie } from '../actions/authActions'
import { checkServerSideCartCookie } from '../actions/cartActions'
import { getPosts } from '../actions/restaurantActions'
import RestaurantsContainer from '../containers/restaurantsContainer'

function Index() {
  return (
    <>
      <Hero
        title="Deliveroo Clone"
        subTitle="A deliveroo Clone using React, Next.js, Redux & Material-ui as front-end and Strapi CMS (node.js) & Stripe as backend"
      />
      <RestaurantsContainer />
    </>
  )
}

Index.getInitialProps = async ctx => {
  await ctx.reduxStore.dispatch(getPosts())
  checkServerSideAuthCookie(ctx) // Check auth
  checkServerSideCartCookie(ctx) // Check cart
  return {}
}

export default Index
