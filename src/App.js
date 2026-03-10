/* import React, { useState } from 'react';
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
export default App;*/
