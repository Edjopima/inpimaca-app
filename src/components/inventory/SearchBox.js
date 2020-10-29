import React from 'react';
import './SearchBox.css';
import {useDispatch} from 'react-redux';
import AddProduct from './AddProduct';

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
            <AddProduct/>
        </div>
          )
}

export default Searchbox;
