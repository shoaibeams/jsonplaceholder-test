import axios from 'axios'

export const makeRequestToJsonPlaceholder = async () => {
  const response = await await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  )

  return response.data
}
