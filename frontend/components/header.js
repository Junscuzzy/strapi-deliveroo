import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Nav className="navbar navbar-dark bg-dark">
        <NavItem>
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>
        </NavItem>

        <NavItem className="ml-auto">
          <Link href="/signin">
            <a className="nav-link">Sign In</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href="/signup">
            <a className="nav-link"> Sign Up</a>
          </Link>
        </NavItem>
      </Nav>
    </header>
  )
}
