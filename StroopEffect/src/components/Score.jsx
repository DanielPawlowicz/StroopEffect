import React from 'react'

const Score = ({good, bad, total}) => {
  return (
    <div className='score_container'>
        <h2>Press the color that the text is coloured with</h2>
        <h3><span className='good_score'>{good}</span> : <span className='bad_score'>{bad}</span ></h3>
        <h3><span className='total_text'>Total: </span>{total}</h3>
    </div>
  )
}

export default Score