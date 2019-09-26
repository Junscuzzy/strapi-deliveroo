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
    console.log('componentDidUpdateFunction')

    // if items in cart, set items and total from cookie
    if (cart) {
      setItems(cart)
      cart.forEach(({ price, quantity }) => setTotal(price * quantity))
    }
  }, [])

  function addItem(item) {
    // check for item already in cart
    const newItem = items.find(i => i.id === item.id)

    // if not in cart, add item if item is found increase quanity ++
    let newItemsArr = []
    if (!newItem) {
      item.quantity = 1
      newItemsArr = items.concat(item)
    } else {
      newItemsArr = items.map(el =>
        el.id === newItem.id ? { ...el, quantity: el.quantity + 1 } : el
      )
    }

    // Update
    setItems(newItemsArr)
    setTotal(total + item.price)
    Cookies.set('cart', newItemsArr)
  }

  function removeItem(item) {
    const newItem = items.find(i => i.id === item.id)

    let newItemsArr = []
    if (newItem.quantity > 1) {
      newItemsArr = items.map(el =>
        el.id === newItem.id ? { ...el, quantity: el.quantity - 1 } : el
      )
    } else {
      const index = items.findIndex(i => i.id === newItem.id)
      items.splice(index, 1)
      newItemsArr = items
    }

    // Update
    setItems(newItemsArr)
    setTotal(total - item.price)
    Cookies.set('cart', newItemsArr)
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
