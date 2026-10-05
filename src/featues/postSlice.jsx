import { createSlice } from '@reduxjs/toolkit'
import { addPost } from '../services/postServices'

let initialState = {
  loading: false,
  posts: null,
  status: null,
  message: null
}

let postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    updateStatus: state => {
      state.status = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(addPost.pending, state => {
        state.loading = true
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false
        state.status = action.payload.status
        state.message = action.payload.message
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false
        state.message = action.error.message
      })
  }
})

export let  {updateStatus} = postSlice.actions
export default postSlice.reducer
