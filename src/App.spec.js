import React from 'react'
import axios from 'axios'
import { makeRequestToJsonPlaceholder } from './services/jsonplaceholder'
import { mockDataForPosts } from './services/mockDataForPosts'

// jest knows to look in the __mocks__ folder
jest.mock('axios')

it('fetches posts from jsonplaceholder and renders them on mount', async () => {
  axios.get.mockResolvedValue({
    data: mockDataForPosts
  })

  const posts = await makeRequestToJsonPlaceholder()
  expect(posts).toEqual(mockDataForPosts)
})
