import React from 'react';
import Sidebar from '../components/Sidebar';
import Inventory from '../components/inventory/Inventory'
import Signin from '../components/Signin'
import {useSelector} from 'react-redux';
import MonitorDolar from '../components/DolarMonitor';
import Modal from '../components/modals/Modal'

const RouteChange = ()=>{
    const store = useSelector((state)=>state);
    return(
        store.isSignedin?
            <div className="App">
                <Sidebar className='sidebar'/>
                <Inventory/>
                <MonitorDolar/>
                {store.modal.showModal?<Modal/>:<div></div>}
            </div>:
            <div className='App-flex'>
                <Signin />
            </div>
    );
}

export default RouteChange;