/*
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;
import React from "react";
import Child from "./child";

function App(){
 return(
  <div>
    <Child name="Nikesh" age="90"/>
  </div>
 );
}

export default App;


import React from "react";
import Child from "./child";
 function App(){
  return(
    <div>
      <Child name="Nikesh" post="Full back"/>
    </div>
  );
 }
 export default App;

import React from "react";
import Child from "./child";
function App(){
  return(
    <div>
      <Child brand="BMW" model="M4" year="2023" />
    </div>
  );
}
export default App;

import React from "react";
import Child from "./child";

function  App(){
  return(
    <div>
      <Child goal="9" assist="6" name="Nikesh" post="Full Back"/>
    </div>
  );
}
export default App;
import React from "react";
import Child from "./child";

function App(){
  return(
    <div>
      <Child skills={["Shooting" , "Passing", "Defending"]}/>
    </div>
  );
}
export default App;*/

import React, { useState } from "react";
import Child from "./child";

function App() {
  const [message, setMessage] = useState("");

  function showMessage() {
    setMessage("Goal!!!!!!!!");
  }

  return (
    <div>
      <Child onClick={showMessage} />
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;