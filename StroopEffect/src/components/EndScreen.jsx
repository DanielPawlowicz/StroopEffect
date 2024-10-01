import React from 'react'

const EndScreen = ({ good, bad, total, setPaused, setStarted, resetScore, setShowEndScreen}) => {

    const exitGame = () => {
        resetScore();
        setShowEndScreen(false);
        setPaused(false);
        setStarted(false);
    }

  return (
    <>
    <div className='end_score_container'>
        <p className='end_good'>Good: {good}</p>
        <p className='end_bad'>Bad: {bad}</p>
        <p className='end_total'>Total: {total}</p>
        <br/>
        <button onClick={resetScore}>Start New Game</button><br/>
        <button onClick={exitGame}>Exit</button>
    </div>
    </>
  )
}

export default EndScreen