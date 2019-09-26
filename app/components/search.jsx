import React from 'react'
import PropTypes from 'prop-types'

export default function Search({ setQuery }) {
  return <input onChange={e => setQuery(e.target.value.toLowerCase())} />
}

Search.propTypes = {
  setQuery: PropTypes.func.isRequired
}
