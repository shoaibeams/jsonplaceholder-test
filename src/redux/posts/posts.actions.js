import { PostActionTypes } from './posts.types'

export const fetchPosts = () => async dispatch => {
  try {
    const response = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts`)
    ).json()
    dispatch({
      type: PostActionTypes.FETCH_POSTS,
      payload: response
    })
  } catch {
    dispatch({ type: 'SET_ERROR' })
  }
}
