import React from 'react'
import App from 'next/app'

import Layout from '../components/layout'
import AppProvider from '../components/context/appProvider'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <AppProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    )
  }
}

export default MyApp
