import React from "react";

function handleClick() {
  console.log("I was Clicked");
}

function Eventhandling() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" />
      <br />
      <br />
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}

export default Eventhandling;
