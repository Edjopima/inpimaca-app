import React from 'react';
import Sidebar from '../components/Sidebar'
import './App.css'
import Inventory from '../components/Inventory';
import Signin from '../components/Signin';

const isSignedin=true;
function App() {

  return (
    isSignedin?
    <div className="App">
      <Sidebar isSignedin={isSignedin} className='sidebar'/>
      <Inventory/>
    </div>:
    <div className='App-flex'>
      <Signin isSignedin={isSignedin}/>
    </div>
  );
}

export default App;
