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

function questionReducer(state = { currQuestion, questions }, action) {
  switch (action.type) {
    case 'question/next':
      return {
        ...state,
        currQuestion: state.currQuestion + 1,
      }
    default:
      return state
  }
}

export default questionReducer
