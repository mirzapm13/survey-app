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
      <Text textContent={questions[currQuestion].question} />
      { error && <p>You haven&apos;t choose an answer yet</p> }
      {questions[currQuestion].answers.map((item, idx) => (
        <Choice
          key={item}
          text={item}
          handleAnswer={handleAnswer}
          idx={idx}
          currQuestion={currQuestion}
        />
      ))}
      <Submit btnText="Submit" handleClick={handleClick} />
    </div>
  )
}
