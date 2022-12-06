import React from 'react';
import './__Text.scss'

export default function Text({ textContent }) {
  return (
    <h1 className="test-class">{ textContent }</h1>
  )
}
