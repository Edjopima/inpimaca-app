import React from 'react';
import Sidebar from '../components/Sidebar'
import LandingPage from '../components/LandingPage';
import './App.css'

function App() {
  return (
    <div className="App">
      <Sidebar className='sidebar'/>
      <LandingPage className='content'/>
    </div>
  );
}

export default App;
