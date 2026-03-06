/* export default function TodoList() {
  return (
    //always need to be rapped img are self closed tag 
    <> 
      <h1>Hedy Lamarr's Todos</h1>
      
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
      /> 
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}*/
/* USING map 

function Fruits(){
    const fruits=["Apple","Mango","Banana","Guaava","Berry"];
    return(
        <ul>
            {fruits.map((fruit)=>( map loops through arrays 
                <li key={fruit}>{fruit}</li>
            ))}
        </ul>
    );
}*/
/*loop in JSX 
function Profile(){
    const name = "Nikesh";
    const age = 9;
    return(
        <div>
            <h1>{name}</h1>
            <p>Age:{age}</p>
            <p>Status: {age>= 18 ? "Adult" : "Minor"}</p>
        </div>
    );
}
export default Profile;*/
/*
import Dashboard from "./Dashboard";
 
function App(){
    const user={
        name:"nikesh",
        age:20,
        isLoggedIn: true,
        hobbies: ["Fish keeping","football","coding"]
    };
    return<Dashboard user = {user}/>
}
export default App; */
export default function Bio() {
  // we cant use "-" or reserve name like classs
  return (
    <div className="intro">
      <h1>Welcome to my website!</h1>
      <p className="summary">
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i></b> of scientists!
      </p>

    </div>
  );
}

/*//to pass a string attribute to JSX, you put it in single or double quotes
export default function Avatar() {
  return (
    
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}*/
/*//But what if you want to dynamically specify the src or alt text? You could use a value from JavaScript by replacing " and " with { and }:
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
} */
/* When you want to pass a string attribute to JSX, you put it in single or double quotes:
  export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
} */
/*// using the double {{}} to pass object and innline css 
  export default function TodoList() {
  return (
    
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
} */

