import React, { useReducer } from "react";

// this hook is mostly used when one change is going to change many states 
// meaning one change will trigger many useState changes so instead of writting multiple useState we use 
// useReducer hook to handle the states 

// here the same concept is used like a store in redux so we can use directly react redux if we have many component and have to many states in our application


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  // initialize with the reducer and the current state
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
