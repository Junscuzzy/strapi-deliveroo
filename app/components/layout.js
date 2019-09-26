import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import Header from './header'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>localhost</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
