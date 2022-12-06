const answers = []

function answerReducer(state = { answers }, action) {
  switch (action.type) {
    case 'answer/add': {
      const mutate = [...state.answers]
      mutate[action.payload.current] = action.payload.chosen
      return {
        ...state,
        answers: mutate,
      }
    }
    default:
      return state
  }
}

export default answerReducer
