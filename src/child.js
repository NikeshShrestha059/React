/*import React from "react";
function Child(props){
  return(
    <div>
      <h1> Hello{props.name}</h1>
      <p>Age:{props.age}</p>
    </div>
  );
}

export default Child; 

import React from "react";
function Child(prop){
  return(
    <div>
      <h1>{prop.name} plays as {prop.post} position</h1>
    </div>
  );
}

export default Child;

import React from "react";
function Child(prop){
  return(
    <h1>{prop.brand} {prop.model} - {prop.year}</h1>
  );
}
export default Child;

import React from "react";
function Child(prop){
  return(
    <div>
      <h1>{prop.name} who playes as a {prop.post} </h1>
      <h2>His Total Contribution: {Number (prop.goal) + Number(prop.assist)}</h2>
      <p>Goal = {prop.goal}</p>
      <p>Assist = {prop.assist}</p>
    </div>
  );
}
export default Child;

import React from "react";
function Child(prop){
  return(
    <ul>
      {prop.skills.map((skill,index)=>(
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
export default Child;*/
import React from "react";

function Child({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

export default Child;