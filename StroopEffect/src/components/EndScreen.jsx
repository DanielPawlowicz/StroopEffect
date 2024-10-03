import React from 'react'

const EndScreen = ({ good, bad, total, resetScore, exitGame, timer}) => {



  return (
    <>
    <div className='end_score_container'>
        <p>Time: &nbsp; <b>{timer}s</b></p>
        <p className='end_good'>Good Answers: &nbsp; <b>{good}</b></p>
        <p className='end_bad'>Bad Answers: &nbsp; <b>{bad}</b></p>
        <p className='end_total'>Total Answers: &nbsp; <b>{total}</b></p>
        <br/>
        <br/>
        <br/>
        <button onClick={resetScore}>Start New Game</button><br/>
        <button onClick={exitGame}>Exit</button>
    </div>
    </>
  )
}

export default EndScreen