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

export let validation = createAsyncThunk('validation/users', async data => {
  let response = await fetch(`${BaseUrl}/users`)
  let responseData = await response.json()

  let finduser = responseData.find(
    user => user.email === data.email && user.password === data.password
  )

  console.log(finduser)
  if (finduser !== undefined) {
    return {
      status: 200,
      user: finduser,
      message: 'Login Successful'
    }
  } else {
    return {
      status: 404,
      message: 'User Not Found'
    }
  }
})
