import React from 'react'

const Welcome = ({ setStarted }) => {
  return (
    <>
    <div className='welcome_container'>
      <h1>Stroop Game</h1>
      <h3>Press the color that the text is coloured with</h3>
      <button onClick={() => setStarted((prev) => !prev)}>Start</button>
    </div>
    </>
  )
}

export default Welcome