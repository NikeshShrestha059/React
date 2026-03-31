
import React, {useState} from "react";

function EventHandler(){
  const[name, setName] = useState(" ");
  const[bgcolor, setColor] = useState("white");


function popUp(e){
  if(e.key === "Enter"){
    alert(`hello ${name}`);
  }
};

return(
  <div style={{
    backgroundColor:bgcolor,
    height:"100vh",
    padding: "20px", 
    textAlign: "center"
  }}
  backgroungColor:bgcolor>
    <label>
      Name:
      <input type= "text"
      placeholder="Type your name"
      onChange={(e)=>setName(e.target.value)} //
      onKeyDown={popUp}/>
      <button onClick={()=>setColor("pink")}>
        Submit</button>
    </label>
  </div>
  );
}

export default EventHandler
  
  