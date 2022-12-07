import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countdown: new Date().getTime() + 15 * 60 * 1000 - new Date().getTime(),
  endTime: new Date().getTime() + 15 * 60 * 1000,
}

const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    setCountdown(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.countdown = action.payload
    },
    resetCountdown(state) {
      // eslint-disable-next-line no-param-reassign
      state.countdown = new Date().getTime() + 15 * 60 * 1000 - new Date().getTime()
      // eslint-disable-next-line no-param-reassign
      state.endTime = new Date().getTime() + 15 * 60 * 1000
    },
  },
})

export const { setStart, setEnd, setCountdown } = timersSlice.actions

export default timersSlice.reducer
