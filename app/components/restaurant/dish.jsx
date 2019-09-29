import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'

import { addItem } from '../../actions/cartActions'
import { apiUrl } from '../../config/api'

export default function Dish(props) {
  const { image, name, price } = props
  const dispatch = useDispatch()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Fade in>
        <Card
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <CardMedia
            style={{
              paddingTop: '56.25%' // 16:9
            }}
            image={`${apiUrl}${image.url}`}
          />
          <CardContent style={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>{`${price}€`}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => dispatch(addItem(props))}
            >
              + Add to cart
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </Grid>
  )
}

Dish.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

Dish.defaultProps = {
  image: { url: '' }
}
