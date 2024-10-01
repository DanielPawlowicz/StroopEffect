import React, { useState } from 'react'
import EndScreen from './EndScreen';

const PauseGame = ({ setPaused, setGood, setBad, setTotal, setStarted, good, bad, total }) => {

  const [showEndScreen, setShowEndScreen] = useState(false);

    const resetScore = () => {
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
          ? <EndScreen good={good} bad={bad} total={total} setPaused={setPaused} setStarted={setStarted} resetScore={resetScore} setShowEndScreen={setShowEndScreen}/> 
      : <>
          <div className='paused'>
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