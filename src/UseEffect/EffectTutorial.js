import React, { useEffect, useState } from "react";
import axios from "axios";

// useLayoutEffect() will always work before the useEffect would work 
// useLayoutEffect is mostly used when we need to make some changes before we print anything to the user
// first every change is done and then the component is loaded for the first time to the user
// this is mostly done when we need to do some ui changes before we display anything to the user


function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
