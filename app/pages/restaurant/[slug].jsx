import React from 'react'
import { connect } from 'react-redux'
import slugify from 'slugify'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Dish from '../../components/restaurant/dish'
import { getPosts } from '../../redux/actions/restaurantActions'
import Cart from '../../components/cart/cart'
import Hero from '../../components/hero'
import { checkServerSideAuthCookie } from '../../redux/actions/authActions'
import { checkServerSideCartCookie } from '../../redux/actions/cartActions'

function RestaurantTemplate({ posts, slug }) {
  // eslint-disable-next-line react/prop-types
  const restaurant = posts.find(props => slugify(props.name) === slug)
  if (!restaurant) {
    return <div>Error</div>
  }
  const { name, dishes, description } = restaurant
  return (
    <>
      <Hero title={name} subTitle={description} />

      <Container>
        <Grid container spacing={4}>
          <Grid item sm={4}>
            <Cart />
          </Grid>
          <Grid item sm={8}>
            <Grid container spacing={2}>
              {dishes.map(props => (
                <Dish key={props.name} {...props} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

RestaurantTemplate.getInitialProps = async ctx => {
  const { reduxStore, query } = ctx
  await reduxStore.dispatch(getPosts())
  checkServerSideAuthCookie(ctx) // Check auth
  checkServerSideCartCookie(ctx) // Check cart
  return { slug: query.slug }
}

RestaurantTemplate.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
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
