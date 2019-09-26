import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../redux/actions/counterActions'
import Examples from '../components/examples'

function Counter({ dispatch }) {
  useEffect(() => {
    let timer = setTimeout(() => {
      timer = startClock(dispatch)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])
  return <Examples />
}

Counter.getInitialProps = ({ reduxStore, req }) => {
  const isServer = !!req
  reduxStore.dispatch(serverRenderClock(isServer))
  return {}
}

export default connect()(Counter)
