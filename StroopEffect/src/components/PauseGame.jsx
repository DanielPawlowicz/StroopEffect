import React from 'react'

const PauseGame = ({ setPaused, setGood, setBad, setTotal, setStarted }) => {

    const resetScore = () => {
        setGood(0);
        setBad(0);
        setTotal(0);
        setPaused(false);
    }

    const endGame = () => {
        setStarted(false);
        setPaused(false);
        resetScore();
    }

  return (
    <div className='paused'>
        <p>Game Paused</p>
        <button onClick={() => setPaused(false)}>Continue Game</button> <br/>
          <button onClick={resetScore}>Restart Game</button> <br/>
        <button onClick={endGame}>End Game</button> <br/>
    </div>
  )
}

export default PauseGame