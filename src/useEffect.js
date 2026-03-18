
/*import React, {useState, useEffect} from 'react';

function CounterTitle(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `click ${count} times`
        console.log("effect ran!");

    },[count]);
    return(
        <button onClick = {() => setCount(count +1)}>
            Update Title
        </button>
    );
}
export default CounterTitle;
import React from "react";
import TimerComponent from './useEffect';

function App(){
    return(
        <div>
            <TimerComponent/>
        </div>
    );
}

export default App;

useEffect(() => {
  fetchUserData(userId);
}, [userId]);
If the userId changes from 1 to 2, React automatically "cleans up" the effect for user 1 and starts the effect for user 2.


import React,{ useEffect } from "react";
 function TimerComponent(){
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Tick");
        },1000);
        return()=>clearInterval(timer);
    },[]);
    return<h1>Click the console</h1>
 }
 export default TimerComponent;*/