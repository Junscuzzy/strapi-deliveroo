import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'

export default function Search({ handleChange, placeholder }) {
  return (
    <Container maxWidth="sm" style={{ display: 'flex' }}>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
        onChange={e => handleChange(e.target.value.toLowerCase())}
        style={{
          width: 500,
          maxWidth: `100%`,
          margin: 'auto'
        }}
      />
    </Container>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

Search.defaultProps = {
  placeholder: 'Search a restaurant'
}
