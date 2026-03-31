/*import React, {useState} from 'react';
function Counter(){
  const [count, setCount]= useState(0);
   return(
    <div>
      <p>You chicked {count} time</p>
      <button onClick={()=> setCount(count + 1)}>Click me</button>
    </div>
   );
}
import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Text
      </button>

      {show && <p>Hello World</p>}
    </div>
  );
}
export default ToggleText;
 import React, { useState } from 'react';
function toggle(){
    const[isVisible, setIsVisible]= useState(false);
    return(
        <div>
            <button onClick={()=>setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Secret Message
            </button>
            {isVisible && <p> React Hooks are awesome! </p>}
        </div>
    );
}
    export default toggle;
import React,{useState} from "react";
 function App(){
    const[isOn, setIsOn] = useState(false);
    const toogle = ()=>{
        setIsOn(!isOn);
    };
    return(
        <button onClick={toogle}>
            {isOn ? "ON" : "OFF"}
        </button>
    );
 }
 export default App; 
 

import React, {useState} from 'react';
function App(){
    const [isOn, setIsOn] = useState(false);
    const toggle =() =>{
        setIsOn(!isOn);
    };

    return(
        <div style={{
            backgroundColor: isOn ? 'white' : 'black',
            height: '100vh',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            transition: '0.3s'
        }}>
            <button onClick={toggle}>
                {isOn ? "Switch OFF" : "Switch ON"}
            </button>
        </div>
    );
}
export default App;
import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setList([...list, task]); // Create new array with new task
      setTask(""); // Clear the input field
    }
  };

  return (
    <div>
      <input 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a task..." 
      />
      <button onClick={handleAdd}>Add</button>
      
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
import React, {useState} from "react";
function Counter(){
  const[count, setCount]= useState(0);
  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count + 1)}>Click Me</button>
    </div>
  );
}*/