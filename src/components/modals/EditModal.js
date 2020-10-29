import React,{useState} from 'react'
import {useDispatch} from 'react-redux'

const EditModal = ({element,type})=>{
    const dispatch=useDispatch()
    //state
    const [product,setProduct]=useState((type==='edit')?element.product:'');
    const [price,setPrice]=useState((type==='edit')?element.price:0);
    const [category, setCategory]=useState('');
    //change state functions
    const onChange = (event,setState,state)=>{
        if (state===price){
            console.log(parseFloat(event.target.value));
            setState(parseFloat(event.target.value));
        }else{
            console.log(event.target.value);
            setState(event.target.value);
        }
    }
    const onSubmitEdit=()=>{
        fetch('https://inpimaca-api.herokuapp.com/actualizarProducto', {
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
        onCancel();
    }
    const onSubmitNew=()=>{
        fetch('https://inpimaca-api.herokuapp.com/agregarProducto', {
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

    return((type==='edit')?
        <div className='Modal'>
                    <h1 className='Modal-title'>Editar Producto</h1>
                        <div className='Modal-content'>
                            <div className='Modal-content-options'>
                                <input onChange={(event)=>onChange(event,setProduct,product)} type='text' placeholder='Producto' className='input' value={product}/>
                                <input onChange={(event)=>onChange(event,setPrice,price)} type='number' placeholder='Precio $' className='input' value={price}/>
                                <select onChange={(event)=>onChange(event,setCategory,category)} name="select" >
                                    <option value="V">Viveres</option>
                                    <option value="D" >Dulces</option>
                                    <option value="L">Lacteos</option>
                                    <option value="AP">Aseo Personal</option>
                                    <option value="O">Otros</option>
                                </select>
                            </div>
                            <div className='Modal-content-buttons'>
                                <button  className='boton' onClick={onSubmitEdit}>Cambiar</button>
                                <button  className='boton' onClick={onCancel}>Cancelar</button>
                            </div>
                            </div>
                        </div>
        :
        <div className='Modal'>
                <h1 className='Modal-title'>Añadir Producto</h1>
                    <div className='Modal-content'>
                        <div className='Modal-content-options'>
                            <input onChange={(event)=>onChange(event,setProduct,product)} type='text' placeholder='Producto' className='input'/>
                            <input onChange={(event)=>onChange(event,setPrice,price)} type='number' placeholder='Precio $' className='input'/>
                            <select onChange={(event)=>onChange(event,setCategory,category)} name="select" >
                                <option value="V">Viveres</option>
                                <option value="D" >Dulces</option>
                                <option value="L">Lacteos</option>
                                <option value="AP">Aseo Personal</option>
                                <option value="O">Otros</option>
                            </select>
                        </div>
                        <div className='Modal-content-buttons'>
                            <button  className='boton' onClick={onSubmitNew}>Cambiar</button>
                            <button  className='boton' onClick={onCancel}>Cancelar</button>
                        </div>
                        </div>
                    </div>)
}

export default EditModal