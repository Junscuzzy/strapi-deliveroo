import PropTypes from 'prop-types'

/**
 * Check if user in logged-in from redux auth.token
 * @param token string
 * @return boolean
 */
export const hasToken = token => typeof token !== 'undefined' && !!token

// Default propTypes for children prop
export const childrenPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
])
