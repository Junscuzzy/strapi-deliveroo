import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { logout } from '../actions/authActions'
import Header from '../components/layout/header'
import { hasJwt } from '../lib/utils'

export default function HeaderContainer() {
  const { jwt } = useSelector(state => state.auth)
  const isAuth = hasJwt(jwt)
  const dispatch = useDispatch()
  return <Header isAuth={isAuth} logout={() => dispatch(logout())} />
}
