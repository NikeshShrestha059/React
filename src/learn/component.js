/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
// export default //it a import and export  component
function Profile() {// (functon)names must start with a capital letter 
  return ( //the return statement should be written in one line or kept inside parenteses or else it will get ignored 
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  ) 
}

 // calling the function when u need it
export default function Gallery() {
  return (
     <section>
      <h1>Amazing scientists</h1>
      <Profile /> 
      <Profile />
      <Profile />
    </section>
  );
}