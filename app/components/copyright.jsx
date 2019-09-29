import React from 'react'
import NextLink from 'next/link'
import PropTypes from 'prop-types'

import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

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
