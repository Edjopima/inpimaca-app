import React from 'react';
import './LandingPage.css';
import Header from './Header'
import Widget from './Widget'

const LandingPage = () =>{
    return(
        <div className='container'>
        <Header/>
        <Widget color='blue'/>
        <Widget color='orange'/>
        </div>
    )
}

export default LandingPage