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

// Regex test if is a email
export const isMail = email =>
  email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
