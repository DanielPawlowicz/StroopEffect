
import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Welcome from './components/Welcome';

function App() {

  const [scoreGood, setScoreGood] = useState(0);
  const [scoreBad, setScoreBad] = useState(0);
  const [scoreTotal, setScoreTotal] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  
  // console.log(scoreGood);

  return (
    <>
      
      {isStarted ? 
        <>
        <h2>Press the color that the text is coloured with</h2>
        <h3><span className='good_score'>{scoreGood}</span> : <span className='bad_score'>{scoreBad}</span ></h3>
        <h3>Total: {scoreTotal}</h3>
        <Game good={scoreGood} setGood={setScoreGood} bad={scoreBad} setBad={setScoreBad} total={scoreTotal} setTotal={setScoreTotal} /> 
        </>
      : <Welcome setStarted={setIsStarted}/>}
      
      
    </>
  )
}

export default App
