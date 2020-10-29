import React from 'react'
import {useDispatch} from 'react-redux'

const DelModal = ({element})=>{
    const {product,price,category}=element
    const dispatch=useDispatch()
    const onSubmit=()=>{
        fetch('https://inpimaca-api.herokuapp.com/eliminarProducto', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                product,
                price,
                category
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
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