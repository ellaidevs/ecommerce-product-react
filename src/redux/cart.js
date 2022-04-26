import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.value += action.payload
    },
    resetCart: (state) => {
      state.value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, resetCart } = cartSlice.actions

export default cartSlice.reducer
