import React from 'react'
import './__Choice.scss'

export default function Choice({
  text, handleAnswer, idx, currQuestion, isActive,
}) {
  let className = 'choice'
  if (isActive) className += ' active'
  return (
    <p onClick={() => handleAnswer(currQuestion, idx)} className={className} role="presentation">{text}</p>
  )
}
