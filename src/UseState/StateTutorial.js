import React, { useState, useEffect } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");
  const [counter,setCounter] = useState(0);
  const [obj,setobj] = useState({name:""});
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  const handleclick = () => {
    setCounter((prev)=>prev+1);
    setobj({name:""});
  }

  // not all the component are re rendered only those component are rendered 
  // whose value will change depending upon the change in the useState() 

  useEffect(()=>{
    console.log("rerendering the page ......");
  },[obj]);

  return (
    <>
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
    <div>
      {counter}
      <button onClick={handleclick}>Increment</button>
    </div>
    </>
  );
};

export default StateTutorial;
