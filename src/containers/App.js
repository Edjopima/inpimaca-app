import React from 'react';
import Sidebar from '../components/Sidebar'
import LandingPage from '../components/LandingPage';
import './App.css'
import Inventory from '../components/Inventory';

function App() {
  return (
    <div className="App">
      <Sidebar className='sidebar'/>
      <Inventory/>
    </div>
  );
}

export default App;
