import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

export default function Submit({ label }) {
  const theme = useTheme()
  return (
    <Box m={theme.spacing(3, 0, 2)}>
      <Button type="submit" fullWidth variant="contained" color="primary">
        {label}
      </Button>
    </Box>
  )
}

Submit.propTypes = {
  label: PropTypes.string
}

Submit.defaultProps = {
  label: 'Submit'
}
