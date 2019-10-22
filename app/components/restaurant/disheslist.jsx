import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import Dish from './dish'
import CartContainer from '../../containers/cartContainer'

function DishList({ dishes, addItem }) {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item sm={4}>
          <CartContainer />
        </Grid>
        <Grid item sm={8}>
          <Grid container spacing={2}>
            {dishes &&
              dishes.map(dish => (
                <Dish key={dish.name} addItem={() => addItem(dish)} {...dish} />
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

DishList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.object),
  addItem: PropTypes.func.isRequired
}

DishList.defaultProps = {
  dishes: []
}

export default DishList
