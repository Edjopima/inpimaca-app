import React from 'react';
import './LandingPage.css';
import Header from './Header'
import Widget from './Widget'

const LandingPage = () =>{
    return(
        <div className='container'>
        <Header/>
        <Widget/>
        <Widget/>
        </div>
    )
}

export default LandingPage