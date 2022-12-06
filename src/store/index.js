import { configureStore } from '@reduxjs/toolkit'

import questionsReducer from '../features/questionsSlice'
import answersReducer from '../features/answersSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    questions: questionsReducer,
    answers: answersReducer,
  },
})

export default store
