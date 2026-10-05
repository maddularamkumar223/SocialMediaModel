import { createAsyncThunk } from '@reduxjs/toolkit'
import { BaseUrl } from '../utilities'

export let addPost = createAsyncThunk('addPost/posts', async data => {
  let response = await fetch(`${BaseUrl}/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return {
    status: response.status,
    message: 'Posted Succesfully'
  }
})
