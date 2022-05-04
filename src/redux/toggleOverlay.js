import { createSlice } from '@reduxjs/toolkit'

export const toggleOverlaySlice = createSlice({
  name: 'toggleOverlay',
  initialState: {
    value: false,
  },
  reducers: {
    setToggleOverlay: (state) => {
      state.value = !state.value
    },
  },
})

export const { setToggleOverlay } = toggleOverlaySlice.actions

export default toggleOverlaySlice.reducer
