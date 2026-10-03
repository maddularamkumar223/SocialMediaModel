import { createSlice } from '@reduxjs/toolkit'
import { addUser } from '../services/authService'

let initialState = {
  loading: false,
  message: null,
  status: null,
  user: null
}
let AuthSlice = createSlice({
  name: 'Auth Slice',
  initialState,
  reducers: {
    updateStatus: state => {
      state.status = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(addUser.pending, state => {
        state.loading = true
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false
        state.status = action.payload.status
        state.message = action.payload.message
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false
        state.message = 'Try Again'
      })
  }
})

export let { updateStatus } = AuthSlice.actions
export default AuthSlice.reducer
