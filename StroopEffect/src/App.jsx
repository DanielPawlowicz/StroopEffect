
import { useState, useEffect } from 'react'
import './App.css'
import Game from './components/Game'
import Welcome from './components/Welcome';
import Score from './components/Score';
import PauseGame from './components/PauseGame';
import EndScreen from './components/EndScreen';

function App() {

  const [scoreGood, setScoreGood] = useState(0);
  const [scoreBad, setScoreBad] = useState(0);
  const [scoreTotal, setScoreTotal] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(60);
  const [initialTimer, setInitialTimer] = useState(60);
  const [hasEnded, setHasEnded] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);

  useEffect(() => {
    let interval;
    if (isStarted && !isPaused && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(interval);
            setHasEnded(true);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isStarted, isPaused, timer]);

  console.log(initialTimer);

  const resetScore = () => {
    setScoreGood(0);
    setScoreBad(0);
    setScoreTotal(0);
    setTimer(initialTimer);
    setIsPaused(false);
    setHasEnded(false);
  };


  const exitGame = () => {
    resetScore();
    setShowEndScreen(false);
    setIsPaused(false);
    setIsStarted(false);
  }


  return (
    <>
      {hasEnded ? (
        <EndScreen
          good={scoreGood}
          bad={scoreBad}
          total={scoreTotal}
          resetScore={resetScore}
          exitGame={exitGame}
          initialTimer={initialTimer}
        />
      ) : isStarted ? (
        <>
          <Score
            good={scoreGood}
            bad={scoreBad}
            total={scoreTotal}
            setPaused={setIsPaused}
            isPaused={isPaused}
            timer={timer}
          />
          <Game setGood={setScoreGood} setBad={setScoreBad} setTotal={setScoreTotal} />
        </>
      ) : (
        <Welcome setStarted={setIsStarted} setTimer={setTimer} setInitialTimer={setInitialTimer}/>
      )}

      {isPaused && (
        <PauseGame
          showEndScreen={showEndScreen}
          setShowEndScreen={setShowEndScreen}
          good={scoreGood}
          bad={scoreBad}
          total={scoreTotal}
          timer={timer}
          resetScore={resetScore}
          setHasEnded={setHasEnded}
          exitGame={exitGame}
          setPaused={setIsPaused}
          initialTimer={initialTimer}
        />
      )}
    </>
  )
}

export default App
