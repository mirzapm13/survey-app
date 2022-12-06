import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  answers: [],
}

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.answers[action.payload.current] = action.payload.chosen
    },
  },
})

export const { addAnswer } = answersSlice.actions

export default answersSlice.reducer
