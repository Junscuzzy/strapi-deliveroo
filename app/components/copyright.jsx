import React from 'react'
import Typography from '@material-ui/core/Typography'
import NextLink from 'next/link'
import Link from '@material-ui/core/Link'
import PropTypes from 'prop-types'

export default function Copyright({ sitename, siteUrl }) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <NextLink href={siteUrl}>
        <Link color="inherit">{sitename}</Link>
      </NextLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

Copyright.propTypes = {
  sitename: PropTypes.string,
  siteUrl: PropTypes.string
}

Copyright.defaultProps = {
  sitename: 'Deliveroo Clone',
  siteUrl: '/'
}
