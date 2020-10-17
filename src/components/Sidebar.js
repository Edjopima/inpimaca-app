import React from 'react';
import './Sidebar.css'
import logo from './LOGO.JPG'

const Header = () =>{
    return(
        <div className = 'sidebar'>
                <img alt='logo' src={logo} className='logo'/>
                <p className = 'item selected' >Inicio</p>
                <p className = 'item' >Tareas</p>
                <p className = 'item' >Inventario</p>
                <p className = 'item' >Deudores</p>
                <p className = 'item' >Lotes</p>
                <p className = 'item' >Proveedores</p>
                <p className = 'item' >Facturas</p>
                <p className = 'item' >Perfil</p>
                <p className = 'item ' >Cerrar sesion</p>
        </div>
    )
}
export default Header