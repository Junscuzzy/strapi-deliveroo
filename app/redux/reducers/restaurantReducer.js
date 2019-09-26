import { restaurantTypes } from '../actionsTypes'

const initialState = {
  posts: [],
  loading: true
}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case restaurantTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts.map(post => ({ ...post, visible: true })),
        loading: false
      }
    case restaurantTypes.FILTER_POSTS:
      return {
        ...state,
        posts: state.posts.map(post => ({
          ...post,
          visible: post.name.toLowerCase().includes(action.search)
        }))
      }
    default:
      return state
  }
}

export default restaurantReducer
