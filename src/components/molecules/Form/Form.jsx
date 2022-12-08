import React, { useState } from 'react'
import Choice from 'components/atoms/Choice'
import Submit from 'components/atoms/Submit'
import Text from 'components/atoms/Text'
import './__Form.scss'
import { useDispatch, useSelector } from 'react-redux'
import { nextQuestion } from 'features/questionsSlice'
import { addAnswer } from 'features/answersSlice'

export default function Form() {
  const { currQuestion, questions } = useSelector((state) => state.questions)
  const { answers } = useSelector((state) => state.answers)

  const dispatch = useDispatch()

  const [error, setError] = useState(false)

  const handleClick = () => {
    if (typeof answers[currQuestion] === 'undefined') {
      setError(true)
      return
    }

    setError(false)
    dispatch(nextQuestion())
  }

  const handleAnswer = (current, chosen) => {
    const payload = { current, chosen }
    dispatch(addAnswer(payload))
  }

  return (
    <div className="survey-form">
      { error && <p id="error">You haven&apos;t choose an answer yet</p> }
      <Text textContent={questions[currQuestion].question} />
      {questions[currQuestion].answers.map((item, idx) => (
        <Choice
          key={item}
          text={item}
          handleAnswer={handleAnswer}
          idx={idx}
          currQuestion={currQuestion}
          isActive={(answers[currQuestion] === idx)}
        />
      ))}
      <Submit btnText="Submit" handleClick={handleClick} />
    </div>
  )
}
