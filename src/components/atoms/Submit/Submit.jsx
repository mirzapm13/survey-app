import React from 'react'

export default function Submit({ btnText, handleClick }) {
  return (
    <button type="button" className="submit-button" onClick={() => handleClick()}>
      { btnText }
    </button>
  )
}
