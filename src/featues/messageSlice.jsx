import { createSlice } from '@reduxjs/toolkit'
import { addMessages, fetchMessages } from '../services/messageService'

let initialState = {
  messages: null,
  loading: false,
  status: null,
  message: ''
}

let messageSlice = createSlice({
  name: 'messageSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addMessages.fulfilled, (state, action) => {
        state.messages = [...state.messages, action.payload.message]
      })
      .addCase(fetchMessages.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false
        state.messages = action.payload
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false
        state.message = action.error.message
      })
  }
})
export default messageSlice.reducer
