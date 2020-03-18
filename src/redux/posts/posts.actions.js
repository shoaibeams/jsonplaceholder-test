import { PostActionTypes } from './posts.types'

export const fetchPosts = () => async dispatch => {
  const response = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
  ).json()

  dispatch({
    type: PostActionTypes.FETCH_POSTS,
    payload: response
  })
}
