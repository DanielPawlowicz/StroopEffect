import React, { useState } from 'react'
import EndScreen from './EndScreen';

const PauseGame = ({ showEndScreen, setShowEndScreen, setPaused, setGood, setBad, setTotal, setStarted, good, bad, total, timer, setTimer }) => {


  if(timer == 0){
    setShowEndScreen(true);
  }

    const resetScore = () => {
        setTimer(0);
        setGood(0);
        setBad(0);
        setTotal(0);
        setPaused(false);
    }

    const endGame = () => {
        setShowEndScreen(true);
    }

  return (
    <>
    {
      showEndScreen 
          ? <EndScreen good={good} bad={bad} total={total} setPaused={setPaused} setStarted={setStarted} resetScore={resetScore} setShowEndScreen={setShowEndScreen} timer={timer}/> 
      : <>
          <div className='paused'>
              <h6>Time: {timer}s</h6>
              <p>Game Paused</p>
              <button onClick={() => setPaused(false)}>Continue Game</button> <br/>
                <button onClick={resetScore}>Restart Game</button> <br/>
              <button onClick={endGame}>End Game</button> <br/>
          </div>
      </>
    }
    </>
  )
}

export default PauseGame