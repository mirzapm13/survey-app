import { combineReducers } from 'redux';
import answerReducer from './answer';
import questionReducer from './question';

const rootReducer = combineReducers({
  answerReducer,
  questionReducer,
})

export default rootReducer
