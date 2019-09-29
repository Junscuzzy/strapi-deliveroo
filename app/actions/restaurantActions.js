import { strapi } from '../config/api'
import { restaurantTypes } from './types'

const { GET_POSTS, FILTER_POSTS, LOADING_POSTS } = restaurantTypes

export const getPosts = () => dispatch => {
  dispatch({ type: LOADING_POSTS })

  return strapi.getEntries('restaurants').then(response => {
    const posts = response.map(post => ({ ...post, visible: true }))
    dispatch({ type: GET_POSTS, posts })
  })
}

export const filterPosts = search => (dispatch, getState) => {
  dispatch({ type: LOADING_POSTS })
  const posts = getState().restaurant.posts.map(post => ({
    ...post,
    visible: post.name.toLowerCase().includes(search)
  }))

  dispatch({ type: FILTER_POSTS, posts })
}
