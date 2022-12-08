import React from 'react'
import Form from 'components/molecules/Form'
import Timer from 'components/molecules/Timer/Timer'
import Finished from 'components/molecules/Finished'
import { useSelector } from 'react-redux'

export default function QuestionView() {
  const { currQuestion, questions } = useSelector((state) => state.questions)
  const { countdown } = useSelector((state) => state.timers)

  if (!questions[currQuestion] || countdown <= 0) {
    return (
      <Finished />
    )
  }

  return (
    <>
      <Timer />
      <Form />
    </>
  )
}
