import React, {useState} from "react"   

const Box = () => {
    const [currentColor, setCurrentColor] = useState('white');
    const color = ["black", "blue", "orange", "pink", "yellow", "green", "purple", "red"]
    const colorChange = () => {
        setCurrentColor(color[Math.floor(Math.random() * color.length)]);
    
    }

    return (
      <>
      <div 
      style={{ border: "2px solid black", height: "150px", width: "150px", margin: "2px", textAlign: "center", backgroundColor: currentColor, borderRadius: "20px"}}
      onClick={colorChange}>
{currentColor}

      </div>
      </>
    )
}

export default Box