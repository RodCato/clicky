
import './App.css';
import React, { useState } from 'react';
import Box from "./components/Box"

const App = ()=> {
  const [boxes, setBoxes] = useState([])
  const addBox = () => {    
    setBoxes(boxes.concat(<Box />))
  }


  return (
    <>
    <div><img src="boxLogo.png" alt="box logo for page" width="50px"/></div>
    <div className='App'>
    <h1>Clicky Box Game</h1>
    <h3>Just create as many boxes as you want and then click the boxes to match up their colors.</h3>
    <button onClick={addBox}>Add a box</button>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {boxes.map((box, index) => {
        return (
          <div key={index}>
            {box}
          </div>  
        ) 
      })} 
   </div>
    </>
    )
}
      
  

export default App;
