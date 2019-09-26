import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'

export default function Search({ setQuery }) {
  return (
    <Container maxWidth="sm" style={{ display: 'flex' }}>
      <TextField
        placeholder="Search a restaurant"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
        onChange={e => setQuery(e.target.value.toLowerCase())}
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
  setQuery: PropTypes.func.isRequired
}
