import { strapi } from '../../config'
import { restaurantTypes } from '../actionsTypes'

export const getPosts = () => dispatch => {
  return strapi.getEntries('restaurants').then(response => {
    dispatch({ type: restaurantTypes.GET_POSTS, posts: response })
  })
}

export const filterPosts = search => {
  if (typeof search !== 'string' || search === '') {
    return getPosts()
  }
  return { type: restaurantTypes.FILTER_POSTS, search }
}
