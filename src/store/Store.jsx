import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../featues/authSlice'
import PostSlice from '../featues/postSlice'

let StoreData = configureStore({
  reducer: {
    auth: AuthSlice,
    post: PostSlice
  }
})
export default StoreData
