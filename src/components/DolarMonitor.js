import React, {useEffect,useState} from 'react';
import './DolarMonitor.css';
import {useDispatch,useSelector} from 'react-redux';

const MonitorDolar = ()=> {
    const dolar = useSelector((state)=>state.dolar);
    const dispatch = useDispatch();
    const [dolarToday, setDolarToday]=useState(0);
    useEffect(()=>{
        fetch('https://s3.amazonaws.com/dolartoday/data.json')
        .then(response=> response.json())
        .then(data=> {
            setDolarToday(data.USD.dolartoday);
            dispatch(
                (data.USD.dolartoday>dolar)?
                {
                    type:'SET_DOLAR',
                    payload: data.USD.dolartoday
                }:{
                    type:'SET_DOLAR',
                    payload:dolar
                }
        )})
        .catch(err=> console.error(err));
    },[])
    return(
        <div className='MonitorDolar'>
            <h1>Dolar Compra: {dolar}</h1>
            <h1>Dolar Today: {dolarToday} </h1>
        </div>
    );
}

export default MonitorDolar;