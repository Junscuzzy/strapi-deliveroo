import PropTypes from 'prop-types'
import { apiUrl } from '../config/api'

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

// Concat image relative path with API URL
export const mediaPath = name => `${apiUrl}${name}`
