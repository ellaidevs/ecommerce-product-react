import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    value: false,
  },
  reducers: {
    setToggleSidebar: (state) => {
      state.value = !state.value
    },
  },
})

export const { setToggleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer
