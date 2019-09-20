import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { css, Global } from '@emotion/core'
import { Container, Nav, NavItem } from 'reactstrap'
import PropTypes from 'prop-types'

const globalStyle = css`
  a {
    color: white !important;
  }
  a:link {
    text-decoration: none !important;
    color: white !important;
  }
  a:hover {
    color: white;
  }
  .card {
    display: inline-block !important;
  }
  .card-columns {
    column-count: 3;
  }
`

function Layout({ children, title }) {
  return (
    <>
      <Global styles={globalStyle} />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </NavItem>

          <NavItem className="ml-auto">
            <Link href="/signin" className="nav-link">
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
      <Container>{children}</Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string
}

Layout.defaultProps = {
  title: 'Welcome to Nextjs'
}

export default Layout
