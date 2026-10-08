import { createAsyncThunk } from '@reduxjs/toolkit'
import { BaseUrl } from '../utilities'

export let addMessages = createAsyncThunk('addMessage/messages', async data => {
  let response = await fetch(`${BaseUrl}/messages`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return {
    status: response.status,
    message: await response.json()
  }
})

export let fetchMessages = createAsyncThunk(
  'fetchMessages/messages',
  async () => {
    let response = await fetch(`${BaseUrl}/messages`)
    let responseData = await response.json()
    return responseData
  }
)
