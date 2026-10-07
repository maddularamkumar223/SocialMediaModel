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

export let fetchUsers = createAsyncThunk('fetchUsers/users', async () => {
  let response = await fetch(`${BaseUrl}/users`)
  let responseData = await response.json()
  return responseData
})

export let follow = createAsyncThunk(
  'fetchSingleUser/users',
  async ({ currentUserId, follwerId }) => {
    console.log(currentUserId)
    console.log(follwerId)
    let currentUser = await fetch(`${BaseUrl}/users/${currentUserId}`)
    let currentUserData = await currentUser.json()

    let currentUserFollowing = [...currentUserData.following, follwerId]

    let currentUserResponse = await fetch(`${BaseUrl}/users/${currentUserId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ following: currentUserFollowing })
    })

    let followUser = await fetch(`${BaseUrl}/users/${follwerId}`)
    let followUserData = await followUser.json()
    let followUserFollers = [...followUserData.followers, currentUserId]
    let followUserResponse = await fetch(`${BaseUrl}/users/${follwerId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ followers: followUserFollers })
    })

    return {
      status: 200,
      id: follwerId
    }
  }
)

export let fetchSingleUser = createAsyncThunk(
  'fetchSinglUser/users',
  async id => {
    let response = await fetch(`${BaseUrl}/users/${id}`)
    let responseData = await response.json()
    return responseData
  }
)
