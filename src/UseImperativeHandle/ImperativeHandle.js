import React, { Component, useRef } from "react";
import Button from "./Button";

// let's see the example below we want to toggle the button component using the  button in this file 
// but the state of the button is stored in the child component so can this parent component change the 
// state of the button that is present as the child 
// the answer is yes it can and for that we use the imperative handling hook of react
// using this can pass the ref along with the props to the child button 
// so can refer to the child class component and then the child class component states can be altered in the parent class

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button // this is the first button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} /> {/* this is the child button */}
    </div>
  );
}

export default ImperativeHandle;
