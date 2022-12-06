import React from 'react'
import DateTimeDisplay from 'components/atoms/DateTimeDisplay'
import './__Timer.scss'

export default function Timer() {
  return (
    <div className="timer">
      <DateTimeDisplay />
      <h1>:</h1>
      <DateTimeDisplay />
      <h1>:</h1>
      <DateTimeDisplay />
    </div>
  )
}
