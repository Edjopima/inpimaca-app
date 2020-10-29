import React from 'react'
import { useDispatch } from 'react-redux';

const AddProduct = ()=>{
    const dispatch=useDispatch();
    const newProduct = ()=>{
        dispatch({
            type:'SHOW_MODAL',
            payload:{
                showModal:true,
                modalStyle:'add',
            }
        });
    }
    return (
        <p onClick={()=>newProduct()}><i class="fas fa-plus"></i></p>
    )
}

export default AddProduct;