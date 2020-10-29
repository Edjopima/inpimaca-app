import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import ModalContent from './ModalContent'

const Modal = () =>{
    const component =
    <div className='ModalContainer'>
        <div className='Modal'>
            <ModalContent/>
        </div>
    </div>

    return ReactDOM.createPortal(component,document.getElementById('modal-root'));

}

export default Modal;