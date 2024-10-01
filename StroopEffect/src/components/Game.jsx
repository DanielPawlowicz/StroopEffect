import React, { useEffect, useRef, useState } from 'react'
// 
//   to do
//    - hello screen and starting game
//    - restarting game
//    - timer
//    - user settings


const Game = ({setGood, setBad, setTotal}) => {

    const colorPL = ['czarny', "czerwony", "zielony", "żółty", "pomarańczowy", 'niebieski', 'różowy', 'fioletowy']
    const colorENG = ['black', 'red', 'green', 'yellow', 'orange', 'blue', 'pink', 'purple'];

    const [currentColor, setCurrentColor] = useState(null); 
    const [currentText, setCurrentText] = useState(null); 

    const textRef = useRef(null);

    const verificationText = useRef(null);

    useEffect(()=>{
      renderRandomColor();
    },[])

    const renderRandomColor = () => {
        let color;
        let text;

      color = colorENG[Math.floor(Math.random() * colorENG.length)];
      text = colorPL[Math.floor(Math.random() * colorPL.length)];

      textRef.current.innerHTML = text;
      textRef.current.style.color = color;

      // console.log(color+" "+text);
      setCurrentColor(color);
      setCurrentText(text);
    }

    const verifyAnswer = (e, pressedColor) => {

      console.log("pressed: "+pressedColor);
      console.log("current: "+currentColor);

      verificationText.current.classList.remove('verification');

      if(currentColor === pressedColor) {
        setGood((good) => good += 1);
        verificationText.current.innerHTML = "dobrze";
        verificationText.current.style.color = "green";
      }
      else {
        verificationText.current.innerHTML = "źle"
        verificationText.current.style.color = "red";
        setBad((bad) => bad += 1);
      }

      setTotal((total) => total += 1);

      void verificationText.current.offsetWidth;
      verificationText.current.classList.add('verification');

      renderRandomColor();
    }

  return (
    <>
      <div className='colorTextContainer'>
        <p className='colorText' ref={textRef}></p>
      </div>
      <div className='colorButtonsContainer'>
        {colorENG.map((color) => (
          <button key={color} style={{backgroundColor: color}} onClick={ (e) => verifyAnswer(e, color) }></button>
        ))}
        <p className='verification' ref={verificationText}></p>
      </div>
    </>
  )
}

export default Game