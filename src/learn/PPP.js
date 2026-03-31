/*Passing props to a component with child and parent 
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
} */
/*forwarding props with JSX spread syntax cuz they don’t use any of their props directly, it can make sense to use a more concise “spread” syntax:
not forwarding 
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
spreading 
  function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
} */
/* Passing jsx as child
When you nest content inside a JSX tag, the parent component will receive that content in a prop called children
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

function Child(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

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
export default App;

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

function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}export default App;*/

