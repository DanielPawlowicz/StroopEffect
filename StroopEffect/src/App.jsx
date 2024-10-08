
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
  const [isPolish, setIsPolish] = useState(true);
  const [isVersion1, setIsVersion1] = useState(true);
  const [isVersionChoosen, setIsVersionChoosen] = useState(false);

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
    setIsVersionChoosen(false);
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
            timer={timer}
            isVersion1={isVersion1}
          />
          <Game 
            setGood={setScoreGood} 
            setBad={setScoreBad} 
            setTotal={setScoreTotal} 
            isPolish={isPolish}
            isVersion1={isVersion1}
          />
        </>
      ) : (
            <Welcome 
              setStarted={setIsStarted} 
              setTimer={setTimer} 
              setInitialTimer={setInitialTimer} 
              isPolish={isPolish} 
              setIsPolish={setIsPolish} 
              isVersion1={isVersion1} 
              setIsVersion1={setIsVersion1} 
              isVersionChoosen={isVersionChoosen} 
              setIsVersionChoosen={setIsVersionChoosen} 
            />
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
