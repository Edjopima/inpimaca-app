import React from 'react';
import './Inventory.css';
import Searchbox from './SearchBox';

const productos=[{name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000},
                 {name:'harina pan',priceDollar:1, priceBolivar:500000}];

const Inventory = ()=>{
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
                                <th>Precio Bs</th>
                                <th>Acciones</th>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='table-scroll'>
                            <table cellspacing="0" cellpadding="0" className='table-content'>
                                {productos.map((product)=>(
                                    <tr>
                                        <td className='table-item'>{product.name}</td>
                                        <td className='table-item'>{product.priceDollar}</td>
                                        <td className='table-item'>{product.priceBolivar}</td>
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
