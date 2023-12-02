import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    // this component is toggling the child on click of the parent component
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  // this function is toggle the state on click of the child component
  const alterToggle = () =>{
    setToggle(!toggle);
  }
  return (
    <>
      <button onClick={alterToggle}>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
