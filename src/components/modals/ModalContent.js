import React from 'react';
import {useSelector} from 'react-redux'
import EditModal from './EditModal'
import DelModal from './DelModal'

const ModalContent = () =>{
    const store = useSelector((state)=>state)
    const renderModal=()=>{
        switch(store.modal.modalStyle){
            case 'edit':{
                return <EditModal element={store.modal.editModalElement} type={store.modal.modalStyle}/>
            }
            case 'del':{
                return <DelModal element={store.modal.editModalElement} />
            }
            case 'add':{
                return <EditModal element={store.modal.editModalElement} type={store.modal.modalStyle}/>
            }
            default :{
                return(<div></div>)
            }
        }
    }
    return(
        <div className='ModalContent'>
            {renderModal()}
        </div>
    )
}

export default ModalContent;