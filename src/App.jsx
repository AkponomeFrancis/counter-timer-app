import React, { useState } from 'react'
import './App.Css'

const App = () => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState (' ');

  // Handling Increase button
  function increasebutton(){
    if(count < 20){
      setCount(prev => prev +1);
      setErrorMessage(' ');
    }else{
      setErrorMessage("You've reached Limit!");
    }
  }
  
  // Handling Decrease button
  function decreasebutton(){
    if(count === 0){
      setErrorMessage("You can't go below 0");
    }else{
      setCount(prev => prev -1);
      setErrorMessage(' ');
    }
  }

  return (
    <div className='counter-container'>
      <div className="counter-conent">
        <h1>Click Counter</h1>
        <p className='count'>{count}</p>
        {errorMessage && <p>{errorMessage}</p>}
        
        <div className="buttons">
          <button onClick={increasebutton}>Increase</button>
          <button onClick={decreasebutton}>Decrease</button>
        </div>
      </div>
    </div>
  )
}

export default App
