import React from 'react'
import styled from '@emotion/styled'
import { Input, InputGroup, InputGroupAddon } from 'reactstrap'
import PropTypes from 'prop-types'

const SearchWrap = styled.div`
  margin: 20px auto;
  width: 500px;
  max-width: 100%;
`

export default function Search({ query, setQuery }) {
  return (
    <SearchWrap>
      <InputGroup>
        <InputGroupAddon addonType="append"> Search </InputGroupAddon>
        <Input
          onChange={e => setQuery(e.target.value.toLowerCase())}
          value={query}
        />
      </InputGroup>
    </SearchWrap>
  )
}

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired
}

Search.defaultProps = {
  query: ''
}
