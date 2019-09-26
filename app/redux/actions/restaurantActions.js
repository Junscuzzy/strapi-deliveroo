import { restaurantTypes } from '../actionsTypes'

export const getPosts = () => {
  return { type: restaurantTypes.GET_POSTS }
}

export const filterPosts = searchQuery => {
  return { type: restaurantTypes.GET_POSTS, searchQuery }
}
