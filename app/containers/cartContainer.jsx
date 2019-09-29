import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CardItem from '../components/cartItem'
import CartLayout from '../components/cartLayout'
import { addItem, removeItem } from '../actions/cartActions'
import { hasToken } from '../lib/utils'

export default function CartContainer() {
  const { items, total } = useSelector(state => state.cart)
  const { token } = useSelector(state => state.auth)
  const isAuth = hasToken(token)
  const dispatch = useDispatch()
  return (
    <CartLayout total={total} isAuth={isAuth}>
      {items.map(
        item =>
          item.quantity > 0 && (
            <CardItem
              key={item.id}
              addItem={() => dispatch(addItem(item))}
              removeItem={() => dispatch(removeItem(item))}
              {...item}
            />
          )
      )}
    </CartLayout>
  )
}
