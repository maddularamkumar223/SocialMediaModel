import { createSlice } from '@reduxjs/toolkit'
import { addPost, deletePost, fetchPost } from '../services/postServices'

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

      .addCase(fetchPost.pending, state => {
        state.loading = true
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload.posts
        state.status = action.payload.status
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false
        state.message = action.error.message
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        let filterPost = state.posts.filter(
          post => post.id !== action.payload.post.id
        )
        state.posts = filterPost
        state.status = action.payload.status
        state.message = 'Post Deleted Successfully'
      })
  }
})

export let { updateStatus } = postSlice.actions
export default postSlice.reducer
