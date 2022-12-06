import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  answers: [],
}

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer(state, action) {
      const mutate = [...state.answers]
      mutate[action.payload.current] = action.payload.chosen
      return {
        ...state,
        answers: mutate,
      }
    },
  },
})

export const { nextQuestion } = answersSlice.actions

export default answersSlice.reducer
