import { createSlice } from '@reduxjs/toolkit'

const questions = [
  {
    question: '1. Test Question 1',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '2. Test Question 2',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '3. Test Question 3',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '4. Test Question 4',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '5. Test Question 5',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '6. Test Question 6',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '7. Test Question 7',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '8. Test Question 8',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '9. Test Question 9',
    answers: [
      'Agree',
      'Neither agree or disagree',
      'Disagree',
    ],
  },
  {
    question: '10. Test Question 10',
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
    resetCurrQuestion(state) {
      // eslint-disable-next-line no-param-reassign
      state.currQuestion = initialState.currQuestion
    },
  },
})

export const { nextQuestion, resetCurrQuestion } = questionsSlice.actions

export default questionsSlice.reducer
