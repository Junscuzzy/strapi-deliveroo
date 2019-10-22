import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

export default function Submit({ label, isValid }) {
  return (
    <Box mt={3} mb={2} mx={0}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        {label}
      </Button>
    </Box>
  )
}
/* eslint-disable react/forbid-prop-types */
Submit.propTypes = {
  label: PropTypes.string,
  isValid: PropTypes.bool
}

Submit.defaultProps = {
  label: 'Submit',
  isValid: false
}
