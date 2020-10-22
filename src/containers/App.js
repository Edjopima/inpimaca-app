import React from 'react';
import Sidebar from '../components/Sidebar'
import './App.css'
import Inventory from '../components/Inventory';
import Signin from '../components/Signin';


function App() {
  const isSignedin=false;

  return (
    isSignedin?
    <div className="App">
      <Sidebar className='sidebar'/>
      <Inventory/>
    </div>:
    <div className='App-flex'>
      <Signin/>
    </div>
  );
}

export default App;
