import React from 'react'
import './__Choice.scss'

export default function Choice({
  text, handleAnswer, idx, currQuestion,
}) {
  return (
    <h3 onClick={() => handleAnswer(currQuestion, idx)} className="choice" role="presentation">{text}</h3>
  )
}
