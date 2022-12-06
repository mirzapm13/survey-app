import { createSlice } from '@reduxjs/toolkit'

const questions = [
  {
    question: '1. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '2. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '3. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '4. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '5. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '6. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '7. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '8. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '9. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '10. Do you agree?',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
]

const currQuestion = 0

const initialState = {
  questions,
  currQuestion,
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    nextQuestion(state) {
      // eslint-disable-next-line no-param-reassign
      state.currQuestion += 1
    },
  },
})

export const { nextQuestion } = questionsSlice.actions

export default questionsSlice.reducer
