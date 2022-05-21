import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import cartReducer from './cart'
import toggleOverlay from './toggleOverlay'
import sidebarReducer from './sidebar'
import mobileSideBar from './mobileSideBar'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    toggle: toggleOverlay,
    sidebar: sidebarReducer,
    mobileSideBar: mobileSideBar,
  },
})
