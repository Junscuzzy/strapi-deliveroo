import React from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'

import { mediaPath } from '../../lib/utils'

export default function Restaurant({ name, description, image }) {
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
            image={mediaPath(image.url)}
          />
          <CardContent style={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
          <CardActions>
            <Link as={`/restaurant/${slugify(name)}`} href="/restaurant/[slug]">
              <Button size="small" color="primary">
                View
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Fade>
    </Grid>
  )
}

Restaurant.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}

Restaurant.defaultProps = {
  image: { url: '' },
  description: ''
}
