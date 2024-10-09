import React, { useEffect, useRef, useState } from 'react'
// 
//   to do
//    - hello screen and starting game
//    - restarting game
//    - timer
//    - user settings


const Game = ({setGood, setBad, setTotal, isPolish, isVersion1}) => {

    const colorPL = ['czarny', "czerwony", "zielony", "żółty", "pomarańczowy", 'niebieski', 'fioletowy']
    const colorENG = ['black', 'red', 'green', 'yellow', 'orange', 'blue', 'purple'];

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
        let textEng;
        let textRandomNumber;

      color = colorENG[Math.floor(Math.random() * colorENG.length)];
      textRandomNumber = Math.floor(Math.random() * colorPL.length);
      
      if(isPolish){
        text = colorPL[textRandomNumber];
        textEng = colorENG[textRandomNumber];
        setCurrentText(textEng);
      } else{
        text = colorENG[textRandomNumber];
        setCurrentText(text);
      }

      setCurrentColor(color);

      textRef.current.innerHTML = text;
      textRef.current.style.color = color;

    }

    const verifyAnswer = (e, pressedColor) => {;

      verificationText.current.classList.remove('verification');

      if(isVersion1){
        if(currentColor === pressedColor) {
          setGood((good) => good += 1);
          isPolish ? verificationText.current.innerHTML = "dobrze" : verificationText.current.innerHTML = "good";
          verificationText.current.style.color = "green";
        }
        else {
          isPolish ? verificationText.current.innerHTML = "źle" : verificationText.current.innerHTML = "bad"
          verificationText.current.style.color = "red";
          setBad((bad) => bad += 1);
        }
      } else {
        if (currentText === pressedColor) {
          setGood((good) => good += 1);
          isPolish ? verificationText.current.innerHTML = "dobrze" : verificationText.current.innerHTML = "good";
          verificationText.current.style.color = "green";
        }
        else {
          isPolish ? verificationText.current.innerHTML = "źle" : verificationText.current.innerHTML = "bad"
          verificationText.current.style.color = "red";
          setBad((bad) => bad += 1);
        }
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