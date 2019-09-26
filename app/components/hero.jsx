import React from 'react'
import PropTypes from 'prop-types'
import useTheme from '@material-ui/core/styles/useTheme'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

export default function Hero({ title, subTitle }) {
  const theme = useTheme()
  return (
    <Container
      maxWidth="sm"
      component="main"
      style={{ padding: theme.spacing(8, 0, 6) }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {title}
      </Typography>
      {subTitle && (
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          {subTitle}
        </Typography>
      )}
    </Container>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

Hero.defaultProps = {
  subTitle: ''
}
