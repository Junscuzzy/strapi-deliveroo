import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { unsetToken } from '../utils/auth'

function Header({ isAuth, username }) {
  return (
    <header>
      <Nav className="navbar navbar-dark bg-dark">
        <NavItem>
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>
        </NavItem>

        {!isAuth && (
          <>
            <NavItem className="ml-auto">
              <Link href="/login">
                <a className="nav-link">Log-in</a>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/register">
                <a className="nav-link">Register</a>
              </Link>
            </NavItem>
          </>
        )}

        {isAuth && (
          <>
            <NavItem className="ml-auto nav-link">{`Hi ${username}!`}</NavItem>
            <NavItem>
              <a href="#" onClick={() => unsetToken()} className="nav-link">
                Log-out
              </a>
            </NavItem>
          </>
        )}
      </Nav>
    </header>
  )
}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
}

export default Header
