import { createSlice } from '@reduxjs/toolkit'

export const MobileSideBar = createSlice({
  name: 'mobileSideBar',
  initialState: {
    value: false,
  },
  reducers: {
    setToggleMobileSideBar: (state) => {
      state.value = !state.value
    },
  },
})

export const { setToggleMobileSideBar } = MobileSideBar.actions

export default MobileSideBar.reducer
