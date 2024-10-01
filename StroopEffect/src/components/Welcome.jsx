import React from 'react'

const Welcome = ({ setStarted }) => {
  return (
    <>
    <div className='welcome_container'>
      <h1>Stroop Game</h1>
      <h4>Press the color that the text is colored with</h4>
      <button onClick={() => setStarted((prev) => !prev)}>Start</button>
    </div>
    </>
  )
}

export default Welcome