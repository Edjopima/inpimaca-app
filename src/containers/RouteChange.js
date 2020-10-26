import React from 'react';
import Sidebar from '../components/Sidebar';
import Inventory from '../components/Inventory'
import Signin from '../components/Signin'
import {useSelector} from 'react-redux';

const RouteChange = ()=>{
    const store = useSelector((state)=>state);
    return(
        store.isSignedin?
            <div className="App">
                <Sidebar className='sidebar'/>
                <Inventory/>
            </div>:
            <div className='App-flex'>
                <Signin />
            </div>
    );
}

export default RouteChange;