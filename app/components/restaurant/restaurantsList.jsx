import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useTheme from '@material-ui/core/styles/useTheme'

import Restaurant from './restaurant'

export default function RestaurantsList({ posts }) {
  const theme = useTheme()
  return (
    <Container
      style={{
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
      }}
    >
      <Grid container spacing={4}>
        {!posts || posts.length < 1 ? (
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
          posts.map(post => <Restaurant key={post.id} {...post} />)
        )}
      </Grid>
    </Container>
  )
}

RestaurantsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
}

RestaurantsList.defaultProps = {
  posts: []
}
