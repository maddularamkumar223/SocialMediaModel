import { createAsyncThunk } from '@reduxjs/toolkit'
import { BaseUrl } from '../utilities'

export let addUser = createAsyncThunk('addUser/users', async data => {
  let response = await fetch(`${BaseUrl}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return {
    status: response.status,
    message: 'Register Seccessfully Done'
  }
})
