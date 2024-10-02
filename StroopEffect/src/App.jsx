
import { useState, useEffect } from 'react'
import './App.css'
import Game from './components/Game'
import Welcome from './components/Welcome';
import Score from './components/Score';
import PauseGame from './components/PauseGame';

function App() {

  const [scoreGood, setScoreGood] = useState(0);
  const [scoreBad, setScoreBad] = useState(0);
  const [scoreTotal, setScoreTotal] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(0);

  // Timer logic
  useEffect(() => {
    let interval;
    if (isStarted && !isPaused) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isStarted, isPaused]);

  return (
    <>
      
      {isStarted 
      ? <>
          <Score good={scoreGood} bad={scoreBad} total={scoreTotal} setPaused={setIsPaused} isPaused={isPaused} timer={timer} />
          <Game setGood={setScoreGood} setBad={setScoreBad} setTotal={setScoreTotal} /> 
        </>
      : <Welcome setStarted={setIsStarted}/>}

      {isPaused && <PauseGame setPaused={setIsPaused} setGood={setScoreGood} setBad={setScoreBad} setTotal={setScoreTotal} setStarted={setIsStarted} good={scoreGood} bad={scoreBad} total={scoreTotal} timer={timer} setTimer={setTimer}/>}
      
      
    </>
  )
}

export default App
