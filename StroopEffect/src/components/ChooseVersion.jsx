import React, { useEffect, useState } from 'react'

const ChooseVersion = ({setIsVersion1, setIsVersionChoosen}) => {

  return (
    <div className='choose_version_container'>
        <h1>Stroop Game</h1>
        <br/>
        <h3>Choose the version of the game</h3>
        <h2>I want to press the color that: </h2>
          <p onClick={() => { setIsVersion1(true); setIsVersionChoosen(true) }}>the text is colored with</p>
          <p onClick={() => { setIsVersion1(false); setIsVersionChoosen(true) }}>the text describes</p>
    </div>
  )
}

export default ChooseVersion