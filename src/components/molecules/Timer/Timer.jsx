import React, { useEffect } from 'react'
import DateTimeDisplay from 'components/atoms/DateTimeDisplay'
import './__Timer.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCountdown } from '../../../features/timersSlice'

export default function Timer() {
  const dispatch = useDispatch()

  const { endTime, countdown } = useSelector((state) => state.timers)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setCountdown(endTime - new Date().getTime()))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="timer">
      <DateTimeDisplay />
      <p>:</p>
      <DateTimeDisplay />
      <p>:</p>
      <DateTimeDisplay />

      <p>
        day :
        {Math.floor(countdown / (1000 * 60 * 60 * 24))}
      </p>
      <p>
        hours :
        {Math.floor(countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)}
      </p>
      <p>
        minutes :
        {Math.floor(countdown % (1000 * 60 * 60)) / (1000 * 60)}
      </p>
      <p>
        seconds  :
        {Math.floor((countdown % (1000 * 60)) / 1000)}
      </p>
    </div>
  )
}
