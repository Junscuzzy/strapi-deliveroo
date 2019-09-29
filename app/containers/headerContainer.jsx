import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { logout } from '../actions/authActions'
import Header from '../components/header'

export default function HeaderContainer() {
  const { token } = useSelector(state => state.auth)
  const isAuth = typeof token !== 'undefined' && !!token
  const dispatch = useDispatch()
  return <Header isAuth={isAuth} logout={() => dispatch(logout())} />
}
