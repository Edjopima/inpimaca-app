import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const DelModal = ({element})=>{
    const store=useSelector((state)=>state)
    const {product,price,category}=element
    const dispatch=useDispatch()
    const onSubmit=()=>{
        fetch('https://inpimaca-api.herokuapp.com/eliminarProducto', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:element.id,
                product,
                price,
                category
            })
        })
        .then(response => response.json())
        .then(data=>{
            const i = store.products.findIndex((e)=>e.product===product);
            store.products.splice(i,1);
        })
        .catch(error => console.error('error'));
        onCancel();
    }
    const onCancel=()=>{
        dispatch({
            type:'SHOW_MODAL',
            payload:{
                showModal:false,
            }
        });
    }
    return(
        <div className='Modal'>
            <h1 className='Modal-title'>Eliminar Producto</h1>
                <div className='Modal-content'>
                    <p>¿Esta seguro de eliminar {element.product}?</p>
                    <div className='Modal-content-buttons'>
                        <button  className='boton' onClick={onSubmit}>Borrar</button>
                        <button  className='boton' onClick={onCancel}>Cancelar</button>
                    </div>
                    </div>
                </div>
    )
}

export default DelModal