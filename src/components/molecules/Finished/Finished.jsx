import React from 'react';
import Submit from 'components/atoms/Submit/Submit';
import { useDispatch } from 'react-redux';
import { resetAnswer } from '../../../features/answersSlice';
import { resetCurrQuestion } from '../../../features/questionsSlice';

export default function Finished() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(resetAnswer())
    dispatch(resetCurrQuestion())
  }

  return (
    <div>
      <h1>You finished the survey</h1>
      <Submit btnText="Do the survey again" handleClick={handleClick} />
    </div>
  )
}
