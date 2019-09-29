import React from 'react'
import { useDispatch } from 'react-redux'

import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'

import { filterPosts } from '../../actions/restaurantActions'

export default function Search() {
  const dispatch = useDispatch()
  return (
    <Container maxWidth="sm" style={{ display: 'flex' }}>
      <TextField
        placeholder="Search a restaurant"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
        onChange={e => dispatch(filterPosts(e.target.value.toLowerCase()))}
        style={{
          width: 500,
          maxWidth: `100%`,
          margin: 'auto'
        }}
      />
    </Container>
  )
}
