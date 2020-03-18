import { PostActionTypes } from './posts.types'

const INITIAL_STATE = {}

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return {
        ...state,
        data: action.payload
      }
    case PostActionTypes.SET_ERROR:
      return { ...state, data: [], error: true }
    default:
      return state
  }
}
