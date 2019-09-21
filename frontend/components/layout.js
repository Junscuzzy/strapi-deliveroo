import React from 'react'
import Head from 'next/head'

import { css, Global } from '@emotion/core'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'

import Header from './header'

const globalStyle = css`
  a {
    text-decoration: none;
  }
  .navbar-brand,
  .nav-link {
    color: white !important;
  }
`

function Layout({ children, title, isAuthenticated, loggedUser }) {
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
      <Header isAuth={isAuthenticated} username={loggedUser} />
      <Container>{children}</Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  loggedUser: PropTypes.string
}

Layout.defaultProps = {
  title: 'Welcome to Nextjs',
  loggedUser: '',
  isAuthenticated: false
}

export default Layout
