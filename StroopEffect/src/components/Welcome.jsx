import React from 'react'
import ukImage from '../assets/uk.png'
import plImage from '../assets/pl.png'
import ChooseVersion from './ChooseVersion'

const Welcome = ({ setStarted, setTimer, setInitialTimer, isPolish, setIsPolish, isVersion1, setIsVersion1, isVersionChoosen, setIsVersionChoosen }) => {


  const timerSetup = (e) => {
    if(e.target.value != 0){
      setTimer(e.target.value);
      setInitialTimer(e.target.value);
    }
  }

  return (
    <>
    {!isVersionChoosen && <ChooseVersion setIsVersion1={setIsVersion1} setIsVersionChoosen={setIsVersionChoosen}/>}

    <div className='welcome_container'>
      <div className='language'>
          <img src={plImage} className={isPolish ? '' : 'gray'} onClick={() => setIsPolish((prev) => !prev)}/>
          <img src={ukImage} className={isPolish ? 'gray' : ''} onClick={() => setIsPolish((prev) => !prev)} />
      </div>
      <h1>Stroop Game</h1>
        {isVersion1 ? <h4>Press the color that the text is colored with</h4> : <h4>Press the color that the text describes</h4>}
      <div className='duration_container'>
        <p className='duration_info'>How long would you like to play?</p>
        <input type='number' placeholder="60" className="duration_input" onChange={(e) => timerSetup(e)}/><span>&nbsp;seconds</span>
      </div>
      <button onClick={() => setStarted((prev) => !prev)}>Start</button>
    </div>
    </>
  )
}

export default Welcome