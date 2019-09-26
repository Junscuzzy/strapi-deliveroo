import React from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import PropTypes from 'prop-types'

export default function RestaurantsList({ posts }) {
  return !posts ? (
    <div>Not Restaurant found</div>
  ) : (
    <ul>
      {posts.map(({ id, name }) => (
        <li key={id}>
          <Link as={`/restaurant/${slugify(name)}`} href="/restaurant/[slug]">
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

RestaurantsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
}

RestaurantsList.defaultProps = {
  posts: []
}
