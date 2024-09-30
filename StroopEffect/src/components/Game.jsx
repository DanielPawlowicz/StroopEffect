import React, { useRef, useState } from 'react'
// 
//   to do
//    - checking if the answer is correct
//    - adding 1 points or 0 points
//    - showing the score
//    - timer
//    - user settings


const Game = () => {

    const colorPL = ['czarny', "czerwony", "zielony", "żółty", "pomarańczowy", 'niebieski', 'różowy', 'fioletowy']
    const colorENG = ['black', 'red', 'green', 'yellow', 'orange', 'blue', 'pink', 'purple'];

    const [currentColor, setCurrentColor] = useState(null); 
    const [currentText, setCurrentText] = useState(null); 

    const textRef = useRef(null);

    const verificationText = useRef(null);

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
        verificationText.current.innerHTML = "dobrze";
        verificationText.current.style.color = "green";
      }
      else {
        verificationText.current.innerHTML = "źle"
        verificationText.current.style.color = "red";
      }

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