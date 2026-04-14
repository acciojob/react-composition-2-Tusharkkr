
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {

  let [flag, setFlag] = useState(false)

  function handleClick(e){
    e.preventDefault()
    setFlag('true')
  }
  
  return (
    <div>
        <button onClick={handleClick}>Show Modal</button>
        {console.log(flag)}
        <Modal
        flag={flag}
        setFlag = {setFlag}
        />
    </div>
  )
}

export default App
