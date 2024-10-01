
import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Welcome from './components/Welcome';
import Score from './components/Score';

function App() {

  const [scoreGood, setScoreGood] = useState(0);
  const [scoreBad, setScoreBad] = useState(0);
  const [scoreTotal, setScoreTotal] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  
  // console.log(scoreGood);

  return (
    <>
      
      {isStarted 
      ? <>
          <Score good={scoreGood} bad={scoreBad} total={scoreTotal}/>
          <Game setGood={setScoreGood} setBad={setScoreBad} setTotal={setScoreTotal} /> 
        </>
      : <Welcome setStarted={setIsStarted}/>}
      
      
    </>
  )
}

export default App
