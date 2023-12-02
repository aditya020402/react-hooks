import axios from "axios";
import { useEffect, useState, useMemo } from "react";

//this hook is mostly use to optimize the performance in the frontend
//when we are doing some big computation in the frontend then we use this hook 


export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("first time");
    // is fetches the comments randomly (just to show some big computation begin done on the front end)
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  // this function would find the length of the longest name in the comment
  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("THIS WAS COMPUTED");
    return longestName;
  };


  // now we use this hook as everytime their is some change in the page or some component rerender 
  // the function findlongestname would be created again even though their is no change in the data and we do not what that 
  // to happen therefore using this hook we store the value that the function would compute once and then we use the same value
  // and the function doesn't have have the loaded again and again and it would only load when the things inside the dependency array change
  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div className="App">
      <div> {getLongestName()} </div>

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
