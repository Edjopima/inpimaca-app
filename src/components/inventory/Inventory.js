import React, {useEffect} from 'react';
import './Inventory.css';
import Searchbox from './SearchBox';
import DolarMonitor from '../DolarMonitor'
import FilterByCategory from './FilterByCategory'
import {useDispatch,useSelector} from 'react-redux';

const roundTo = (value, places) => {
    let power = Math.pow(10, places);
    return Math.round(value * power) / power;
}

const Inventory = ()=>{
    const dolar = useSelector((state)=> state.dolar);
    const products= useSelector((state)=>state.productsFiltered)
    const dispatch= useDispatch();
    const editProduct = (product,mode)=>{
        dispatch({
            type:'SHOW_MODAL',
            payload:{
                showModal:true,
                modalStyle:mode,
                editModalElement:product
            }
        });
    }
    useEffect(()=>{
        fetch('https://inpimaca-api.herokuapp.com/inventario')
        .then(response => response.json())
        .then(data => dispatch({
            type:'SET_PRODUCTS',
            payload:data}))
        .catch(err=> console.error(err));
    },[])
    return(
        <div className='inventory'>
            <h1 className='title'>Inventario</h1>
            <DolarMonitor/>
            <Searchbox/>
            <FilterByCategory/>
            <table cellspacing="0" cellpadding="0"  className='table'>
                <tr>
                    <td>
                        <table className='table-header' cellspacing="5"  cellpadding="0">
                            <tr>
                                <th className='table-item'>Producto</th>
                                <th className='table-item'>Precio $</th>
                                <th className='table-item'>Precio Bs.</th>
                                <th className='table-item'>Acciones</th>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='table-scroll'>
                            <table cellspacing="0" cellpadding="0" className='table-content'>
                                {products.map((product)=>(
                                    <tr id={product.id} className= 'table-item'>
                                        <td className='table-item'>{product.product}</td>
                                        <td className='table-item'>{product.price}</td>
                                        <td className='table-item'>{roundTo((product.price * dolar),2)}</td>
                                        <td className='table-item acciones'>
                                            <button className='edit' onClick={()=>editProduct(product,'edit')}><i class="fas fa-pencil-ruler"></i></button>
                                            <button className='delete' onClick={()=>editProduct(product,'del')}><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    ))}
                            </table>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Inventory;
