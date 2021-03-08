import './App.css';
import React, { useState } from 'react';
import User from './components/User/User';
function App() {
  const [familiar , setFamiliar] = useState(false);
  console.log(familiar);
  return (
    <div className="App">
      <h2>Is Familiar: {familiar.toString()}</h2>
      <button onClick={() => setFamiliar(!familiar)}>Toggle status</button>
      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
