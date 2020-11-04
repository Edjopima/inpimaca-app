import React, {useEffect} from 'react';
import './DolarMonitor.css';
import {useDispatch,useSelector} from 'react-redux';

const MonitorDolar = ()=> {
    const dolar = useSelector((state)=>state.dolar);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://s3.amazonaws.com/dolartoday/data.json')
        .then(response=> response.json())
        .then(data=> dispatch(
            (data>dolar)?
            {
                type:'SET_DOLAR',
                payload: data.USD.dolartoday
            }:{
                type:'SET_DOLAR',
                payload:dolar
            }
        ))
        .catch(err=> console.error(err));
    },[])
    return(
        <div className='MonitorDolar'>
            <h1>Dolar: {dolar}</h1>
        </div>
    );
}

export default MonitorDolar;