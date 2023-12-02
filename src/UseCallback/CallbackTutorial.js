 import axios from "axios";
import { Component, useCallback, useState } from "react";
import Child from "./Child";

// now we are extending the work of useMemo hook to the child class componet as well
// meaning we don't want the function that is their inside the child class to be created again again 
// and compute the value when their is no change in the data therefore here we need to memoize the entire function 
// that is their in the child Component

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
