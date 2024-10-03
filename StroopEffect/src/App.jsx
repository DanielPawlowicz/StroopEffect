
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
  const [timer, setTimer] = useState(5);
  const [hasEnded, setHasEnded] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);


  // Timer logic
  useEffect(() => {
    let interval;
    if (isStarted && !isPaused && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(interval);
            // setIsStarted(false); // End the game when the timer reaches 0
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

  const resetScore = () => {
    setScoreGood(0);
    setScoreBad(0);
    setScoreTotal(0);
    setTimer(5);
    setIsPaused(false);
    setHasEnded(false);
  };

  return (
    <>
      {hasEnded ? (
        <EndScreen
          good={scoreGood}
          bad={scoreBad}
          total={scoreTotal}
          timer={timer}
          setPaused={setIsPaused}
          resetScore={resetScore}
          setStarted={setIsStarted}
          setShowEndScreen={setShowEndScreen}
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
        <Welcome setStarted={setIsStarted} />
      )}

      {isPaused && (
        <PauseGame
          showEndScreen={showEndScreen}
          setShowEndScreen={setShowEndScreen}
          setPaused={setIsPaused}
          setGood={setScoreGood}
          setBad={setScoreBad}
          setTotal={setScoreTotal}
          setStarted={setIsStarted}
          good={scoreGood}
          bad={scoreBad}
          total={scoreTotal}
          timer={timer}
          setTimer={setTimer}
          setHasEnded={setHasEnded}
        />
      )}
    </>
  )
}

export default App
