import axios from 'axios'

import { apiUrl } from '../config/api'
import { restaurantTypes } from './types'

const { GET_POSTS, FILTER_POSTS, LOADING_POSTS } = restaurantTypes

export const getPosts = () => dispatch => {
  dispatch({ type: LOADING_POSTS })

  return axios
    .get(`${apiUrl}/restaurants`, {})
    .then(({ data }) => {
      const posts = data.map(post => ({ ...post, visible: true }))
      dispatch({ type: GET_POSTS, posts })
    })
    .catch(error => console.log('An error occurred:', error))
}

export const filterPosts = search => (dispatch, getState) => {
  dispatch({ type: LOADING_POSTS })
  const posts = getState().restaurant.posts.map(post => ({
    ...post,
    visible: post.name.toLowerCase().includes(search)
  }))

  dispatch({ type: FILTER_POSTS, posts })
}
