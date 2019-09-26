import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { addItem } from '../redux/actions/cartActions'

export default function Dish(props) {
  const { image, name, price } = props
  const dispatch = useDispatch()
  return (
    <div style={{ width: `33%` }}>
      <img width="100%" src={`http://localhost:1337${image.url}`} alt={name} />
      <p>{`${name} - ${price}€`}</p>
      <br />
      <button type="button" onClick={() => dispatch(addItem(props))}>
        + Add to cart
      </button>
    </div>
  )
}

Dish.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

Dish.defaultProps = {
  image: { url: '' }
}
