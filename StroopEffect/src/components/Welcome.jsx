import React from 'react'

const Welcome = ({ setStarted, setTimer, setInitialTimer }) => {


  const timerSetup = () => {
    if(e.target.value != 0){
      setTimer(e.target.value);
      setInitialTimer(e.target.value);
    }
  }

  return (
    <>
    <div className='welcome_container'>
      <h1>Stroop Game</h1>
      <h4>Press the color that the text is colored with</h4>
      <p className='duration_info'>How long would you like to play?</p>
      <input type='number' placeholder="60" className="duration_input" onChange={(e) => timerSetup()}/><span>&nbsp;seconds</span>
      <br/>
      <button onClick={() => setStarted((prev) => !prev)}>Start</button>
    </div>
    </>
  )
}

export default Welcome