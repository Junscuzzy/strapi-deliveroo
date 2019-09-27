import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Fade from '@material-ui/core/Fade'

import { addItem, removeItem } from '../../redux/actions/cartActions'
import { apiUrl } from '../../config/api'

export default function CardItem(props) {
  const { image, name, price, quantity } = props
  const dispatch = useDispatch()
  return (
    <Fade in>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={apiUrl + image.url} />
        </ListItemAvatar>
        <ListItemText
          primary={`${name}  ${quantity > 1 ? `x ${quantity}` : ``}`}
          secondary={`${price}€`}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="add" onClick={() => dispatch(addItem(props))}>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton
            aria-label="remove"
            onClick={() => dispatch(removeItem(props))}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Fade>
  )
}

CardItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
}
