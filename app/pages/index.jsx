import React from 'react'

import { getPosts } from '../actions/restaurantActions'
import Search from '../components/restaurant/search'
import RestaurantsList from '../components/restaurant/restaurantsList'
import Hero from '../components/hero'
import { checkServerSideAuthCookie } from '../actions/authActions'
import { checkServerSideCartCookie } from '../actions/cartActions'

export default function Index() {
  return (
    <>
      <Hero
        title="Deliveroo Clone"
        subTitle="A deliveroo Clone using React, Next.js, Redux & Material-ui as front-end and Strapi CMS (node.js) & Stripe as backend"
      />
      <Search />
      <RestaurantsList />
    </>
  )
}

Index.getInitialProps = async ctx => {
  await ctx.reduxStore.dispatch(getPosts())
  checkServerSideAuthCookie(ctx) // Check auth
  checkServerSideCartCookie(ctx) // Check cart
  return {}
}
