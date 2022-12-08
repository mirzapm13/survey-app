import React, { useEffect } from 'react'
import DateTimeDisplay from 'components/atoms/DateTimeDisplay'
import './__Timer.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCountdown } from 'features/timersSlice'

export default function Timer() {
  const dispatch = useDispatch()

  const { endTime, countdown } = useSelector((state) => state.timers)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setCountdown(endTime - new Date().getTime()))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatMinutes = (time) => {
    let minuteTime = Math.floor(time % (1000 * 60 * 60)) / (1000 * 60)
    minuteTime = Math.floor(minuteTime).toString()
    if (minuteTime.length < 2) return `0${minuteTime}`
    return minuteTime
  }
  const formatSeconds = (time) => {
    let secondTime = Math.floor((time % (1000 * 60)) / 1000)
    secondTime = Math.floor(secondTime).toString()
    if (secondTime.length < 2) return `0${secondTime}`
    return secondTime
  }

  return (
    <div className="timer">
      <DateTimeDisplay time={formatMinutes(countdown)} />
      <p>:</p>
      <DateTimeDisplay time={formatSeconds(countdown)} />
    </div>
  )
}
