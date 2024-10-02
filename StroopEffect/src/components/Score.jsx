import React from 'react'
import {FaPause} from 'react-icons/fa'

const Score = ({good, bad, total, setPaused, isPaused, timer}) => {
  return (
    <div className='score_container'>
        <h4>{timer}s</h4>
        <div className='pause_button_container'>
            <FaPause className="pause_button" onClick={() => setPaused(true)}/>
        </div>
        <h2>Press the color that the text is coloured with</h2>
        <h3><span className='good_score'>{good}</span> : <span className='bad_score'>{bad}</span ></h3>
        <h3><span className='total_text'>Total: </span>{total}</h3>
    </div>
  )
}

export default Score