import React from 'react'
import Head from 'next/head'

import HeaderContainer from '../../containers/headerContainer'
import { childrenPropTypes } from '../../lib/utils'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>localhost</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderContainer />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: childrenPropTypes.isRequired
}

export default Layout
