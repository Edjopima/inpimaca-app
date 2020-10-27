import React from 'react';
import './Sidebar.css'
import logo from './LOGO.JPG'
import {useDispatch} from 'react-redux';

const Header = () =>{
    const dispatch = useDispatch();
    const logout= ()=>{
        dispatch({
            type:'LOGOUT',
        })
    }
    return(
        <div className = 'sidebar'>
                <img alt='sidebar-logo' src={logo} className='sidebar-logo'/>
                <p className = 'sidebar-item selected' >Inicio</p>
                <p className = 'sidebar-item' >Tareas</p>
                <p className = 'sidebar-item' >Inventario</p>
                <p className = 'sidebar-item' >Deudores</p>
                <p className = 'sidebar-item' >Lotes</p>
                <p className = 'sidebar-item' >Proveedores</p>
                <p className = 'sidebar-item' >Facturas</p>
                <p className = 'sidebar-item' >Perfil</p>
                <p className = 'sidebar-item ' onClick={logout}>Cerrar sesion</p>
        </div>
    )
}
export default Header