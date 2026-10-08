import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../featues/authSlice'
import PostSlice from '../featues/postSlice'
import MessageSlice from '../featues/messageSlice'

let StoreData = configureStore({
  reducer: {
    auth: AuthSlice,
    post: PostSlice,
    messages: MessageSlice
  }
})
export default StoreData
