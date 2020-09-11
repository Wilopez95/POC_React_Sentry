import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';

function App() {

  const counter = useSelector(state => state.counter);  
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button>
        +
      </button>
      <button>
        -
      </button>

      {isLogged ? <h3> Information that you should see if user is logged</h3>: ''} 


    </div>
  );
}

export default App;
