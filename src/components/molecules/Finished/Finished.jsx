import React from 'react';
import Submit from 'components/atoms/Submit/Submit';
import { useDispatch, useSelector } from 'react-redux';
import { resetAnswer } from 'features/answersSlice';
import { resetCurrQuestion } from 'features/questionsSlice';
import { resetCountdown } from 'features/timersSlice';
import './__Finished.scss';

export default function Finished() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(resetAnswer())
    dispatch(resetCurrQuestion())
    dispatch(resetCountdown())
  }

  const { answers } = useSelector((state) => state.answers)
  const { questions } = useSelector((state) => state.questions)

  return (
    <div className="finished">
      <p>You finished the survey</p>
      <div className="answers">
        <p id="title">Here are your answers</p>
        {questions.map((question, idx) => <p>{`${idx + 1}. ${question.answers[answers[idx]]}`}</p>)}
      </div>
      <Submit btnText="Do the survey again" handleClick={handleClick} />
    </div>
  )
}
