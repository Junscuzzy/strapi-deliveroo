import { restaurantTypes } from '../actionsTypes'

const { GET_POSTS, FILTER_POSTS, LOADING_POSTS } = restaurantTypes

const initialState = {
  posts: [],
  loading: true
}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_POSTS:
      return { ...state, loading: true }
    case GET_POSTS:
      return { ...state, posts: action.posts, loading: false }
    case FILTER_POSTS:
      return { ...state, posts: action.posts, loading: false }
    default:
      return state
  }
}

export default restaurantReducer
