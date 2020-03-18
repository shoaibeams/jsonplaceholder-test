import { PostActionTypes } from './posts.types'

const INITIAL_STATE = {}

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
