import React, { useState } from 'react'
import EndScreen from './EndScreen';

const PauseGame = ({ showEndScreen, setShowEndScreen, good, bad, total, resetScore, timer, exitGame }) => {

    const endGame = () => {
        setShowEndScreen(true);
    }

  return (
    <>
    {
      showEndScreen 
          ? <EndScreen good={good} bad={bad} total={total} resetScore={resetScore} timer={timer} exitGame={exitGame}/> 
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