import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'

/* First we will make a new context */
const AppContext = React.createContext()

function AppProvider({ children }) {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(null)

  useEffect(() => {
    const cart = Cookies.getJSON('cart')
    // if items in cart, set items and total from cookie
    if (cart) {
      setItems(cart)
      cart.forEach(({ price, quantity }) => setTotal(price * quantity))
    }
  }, [])

  function addItem(item) {
    const tmpItem = item
    // check for item already in cart
    // if not in cart, add item if item is found increase quanity ++
    const newItem = items.find(i => i.id === tmpItem.id)
    if (!newItem) {
      tmpItem.quantity = 1
      setItems(items.concat(tmpItem))
      setTotal(total + tmpItem.price)
    } else {
      setItems(
        items.map(el =>
          el.id === newItem.id ? { ...el, quantity: el.quantity + 1 } : el
        )
      )
      setTotal(total + tmpItem.price)
    }
    Cookies.set('cart', items)
  }

  function removeItem(item) {
    const newItem = items.find(i => i.id === item.id)
    if (newItem.quantity > 1) {
      setItems(
        items.map(el =>
          el.id === newItem.id ? { ...el, quantity: el.quantity - 1 } : el
        )
      )
      setTotal(total - item.price)
    } else {
      const index = items.findIndex(i => i.id === newItem.id)
      items.splice(index, 1)
      setItems(items)
      setTotal(total - item.price)
    }
    Cookies.set('cart', items)
  }

  return (
    <AppContext.Provider value={{ items, addItem, removeItem, total }}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

/* then make a consumer which will surface it as an HOC */
// This function takes a component...
export function withContext(Component) {
  // ...and returns another component...
  return function ContextComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    )
  }
}

export default AppProvider
