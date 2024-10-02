import React, { useEffect, useState } from 'react'

const Timer = ({isPaused}) => {

    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isPaused]);

    // useEffect(() => {
    //     let interval;
    //     if(isRunning){
    //         setInterval(() => {
    //             setTimer((prev) => prev += 1);
    //         }, 1000)
    //     }

    //     return () => clearInterval(interval);
    // }, [isRunning])

    // useEffect(() => {

    //     if(isPaused){
    //         setIsRunning((prev) => !prev);
    //     }

    // }, [isPaused])

  return (
    <div>{timer}</div>
  )
}

export default Timer