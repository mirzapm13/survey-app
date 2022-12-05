import React from 'react'
import Choice from 'components/atoms/Choice'
import Submit from 'components/atoms/Submit'
import Text from 'components/atoms/Text'
import './__Form.scss'

export default function Form() {
  return (
    <div className="survey-form">
      <Text />
      <Choice />
      <Submit />
    </div>
  )
}
