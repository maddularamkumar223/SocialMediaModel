import { createSlice } from '@reduxjs/toolkit'
import { addUser, validation } from '../services/authService'

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
    },
    logout:(state)=>{
      state.user = null
      localStorage.removeItem("id")
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
      .addCase(addUser.rejected, state => {
        state.loading = false
        state.message = 'Try Again'
      })
      .addCase(validation.pending, state => {
        state.loading = true
      })
      .addCase(validation.fulfilled, (state, action) => {
        state.loading = false
        state.status = action.payload.status
        state.user = action.payload.user
        state.message = action.payload.message
      })
  }
})

export let { updateStatus,logout } = AuthSlice.actions
export default AuthSlice.reducer
