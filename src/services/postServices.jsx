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

export let fetchPost = createAsyncThunk('fetchPost/posts', async () => {
  let response = await fetch(`${BaseUrl}/posts`)
  let responseData = await response.json()
  return {
    posts: responseData,
    status: response.status
  }
})

export let deletePost = createAsyncThunk('deletePost/posts', async id => {
  let response = await fetch(`${BaseUrl}/posts/${id}`, {
    method: 'DELETE'
  })
  let responseData = await response.json()
  console.log(responseData)
  console.log(response)
  return {
    status: 202,
    post: responseData
  }
})
