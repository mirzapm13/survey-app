import React from 'react'
import Choice from 'components/atoms/Choice'
import Submit from 'components/atoms/Submit'
import Text from 'components/atoms/Text'
import './__Form.scss'
import { useDispatch, useSelector } from 'react-redux'
import { nextQuestion } from 'store/actions/questionAction'
import { addAnswer } from 'store/actions/answerAction'

export default function Form() {
  const { currQuestion, questions } = useSelector((state) => state.questionReducer)
  const { answers } = useSelector((state) => state.answerReducer)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(nextQuestion())
  }

  const handleAnswer = (current, chosen) => {
    const payload = { current, chosen }
    dispatch(addAnswer(payload))
  }

  if (!questions[currQuestion]) {
    return (
      <div>You finished the quiz</div>
    )
  }

  return (
    <div className="survey-form">
      <Text textContent={questions[currQuestion].question} />
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
      <p>{ answers }</p>
    </div>
  )
}
