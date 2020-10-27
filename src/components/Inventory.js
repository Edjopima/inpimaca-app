import React, {useEffect, useState} from 'react';
import './Inventory.css';
import Searchbox from './SearchBox';

const Inventory = ()=>{
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://inpimaca-api.herokuapp.com/')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return(
        <div className='inventory'>
            <h1 className='title'>Inventario</h1>
            <Searchbox/>
            <table cellspacing="0" cellpadding="0"  className='table'>
                <tr>
                    <td>
                        <table className='table-header' cellspacing="5"  cellpadding="0">
                            <tr>
                                <th>Producto</th>
                                <th>Precio $</th>
                                <th>Categoria</th>
                                <th>Acciones</th>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='table-scroll'>
                            <table cellspacing="0" cellpadding="0" className='table-content'>
                                {products.map((product)=>(
                                    <tr>
                                        <td className='table-item'>{product.product}</td>
                                        <td className='table-item'>{product.price}</td>
                                        <td className='table-item'>{product.category}</td>
                                        <td className='table-item'>
                                            <button>Edit</button>
                                            <button>Delete</button>
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
