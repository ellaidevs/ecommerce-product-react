import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import cartReducer from './cart'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
})
