import React from 'react'
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

import { mediaPath } from '../../lib/utils'

export default function CardItem({ addItem, removeItem, ...props }) {
  const { image, name, price, quantity } = props
  return (
    <Fade in>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={mediaPath(image.url)} />
        </ListItemAvatar>
        <ListItemText
          primary={`${name}  ${quantity > 1 ? `x ${quantity}` : ``}`}
          secondary={`${price}€`}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="add" onClick={addItem}>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton aria-label="remove" onClick={removeItem}>
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
  quantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
}
