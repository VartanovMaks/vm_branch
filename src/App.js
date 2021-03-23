import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function tick(){
  const element = (
      <div>
        <h1>Hello, world</h1>
        <h2> It is {new Date().toLocaleTimeString()}...</h2>
      </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

function App() {

      return (
        <div className="App">
            {setInterval(tick,1000)}
        </div>
      );

}

export default App;
