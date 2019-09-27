import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useTheme from '@material-ui/core/styles/useTheme'

import { useSelector } from 'react-redux'
import Restaurant from './restaurant'
import Loader from '../loader'

export default function RestaurantsList() {
  const theme = useTheme()
  const { posts, loading } = useSelector(state => state.restaurant)
  if (loading) {
    return <Loader />
  }
  const restaurants = posts.filter(p => p.visible)
  return (
    <Container
      style={{
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
      }}
    >
      <Grid container spacing={4}>
        {!restaurants || restaurants.length < 1 ? (
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{
              textAlign: 'center',
              width: `100%`,
              paddingTop: theme.spacing(6)
            }}
          >
            Not Restaurant found
          </Typography>
        ) : (
          restaurants.map(post => <Restaurant key={post.id} {...post} />)
        )}
      </Grid>
    </Container>
  )
}
