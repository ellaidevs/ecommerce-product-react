import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import cartReducer from './cart'
import toggleOverlay from './toggleOverlay'
import sidebarReducer from './sidebar'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    toggle: toggleOverlay,
    sidebar: sidebarReducer,
  },
})
