import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CardItem from '../components/cart/cartItem'
import CartLayout from '../components/cart/cartLayout'
import { addItem, removeItem } from '../actions/cartActions'
import { hasJwt } from '../lib/utils'

export default function CartContainer() {
  const { items, total } = useSelector(state => state.cart)
  const { jwt } = useSelector(state => state.auth)
  const isAuth = hasJwt(jwt)
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
