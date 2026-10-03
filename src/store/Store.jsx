import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../featues/authSlice'

let StoreData = configureStore({
  reducer: {
    auth: AuthSlice
  }
})
export default StoreData
