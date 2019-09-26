import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addItem, removeItem } from '../redux/actions/cartActions'

export default function Cart() {
  const { items, total } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      <h3>Cart</h3>

      <ul>
        {items &&
          items.map(
            item =>
              item.quantity > 0 && (
                <li key={item.id}>
                  <h4>{item.name}</h4>
                  <p>{`${item.price}€`}</p>
                  <div style={{ display: 'flex' }}>
                    <button
                      type="button"
                      onClick={() => dispatch(removeItem(item))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(addItem(item))}
                    >
                      +
                    </button>
                  </div>
                </li>
              )
          )}
      </ul>
      <p>{`Total: ${total}€`}</p>
    </>
  )
}
