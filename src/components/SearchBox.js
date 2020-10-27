import React from 'react';
import './SearchBox.css';
import {useDispatch} from 'react-redux';

const Searchbox = ()=>{
    const dispatch = useDispatch();
    const search =(event)=>{
        dispatch({
            type:'FILTER_BY NAME',
            payload: event.target.value.toLowerCase()
        })
    }
    return(
        <div className='Searchbox'>
            <i class="fas fa-search"></i>
            <input onChange={(event)=> search(event)} type='text' placeholder='Buscar' className='Search'></input>
        </div>
          )
}

export default Searchbox;
