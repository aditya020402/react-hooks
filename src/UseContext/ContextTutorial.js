import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";


// useContext hook is an alternative to react redux mechanism 
// this can be used if a small or middle size application to maintain the state of the component
// however when we have many complex state it is better to use the react redux store mechanism 

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> 
      <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;
