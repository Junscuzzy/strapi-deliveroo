import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center" py={8} width="100%">
      <CircularProgress />
    </Box>
  )
}
