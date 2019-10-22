import PropTypes from 'prop-types'
import { apiUrl } from '../config/api'

/**
 * Check if user in logged-in from redux auth.jwt
 * @param jwt string
 * @return boolean
 */
export const hasJwt = jwt => typeof jwt !== 'undefined' && !!jwt

// Default propTypes for children prop
export const childrenPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
])

// Concat image relative path with API URL
export const mediaPath = name => `${apiUrl}${name}`
