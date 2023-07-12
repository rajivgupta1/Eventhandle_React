import React, { useState } from "react";
import './hello.css';


const App = () => {
  const purple = "orange";
   
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("click me");
  

   const bgChange = () =>{
    let newBg = "#34495e";
      setBg(newBg);
      setName("Ouch!! ");
   };

   const bgBack = () =>{
    setBg(purple);
    setName("Ayyo!!");
   }
  
  return (
    <div style={{backgroundColor: bg }}>

    <button onClick={bgChange} onDoubleClick={bgBack} className="btn">{name}</button>

    </div>
  )
}

export default App;