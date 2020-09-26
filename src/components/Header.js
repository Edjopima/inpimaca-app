import React from 'react';
import './Header.css'
import logo from './LOGO.JPG'

const Header = () =>{
    return(
        <nav className = 'header'>
                <img src={logo} className='logo'/>
                <p className = 'item' >Inicio</p>
                <p className = 'item' >Tareas</p>
                <p className = 'item' >Inventario</p>
                <p className = 'item' >Deudores</p>
                <p className = 'item' >Lotes</p>
                <p className = 'item' >Proveedores</p>
                <p className = 'item' >Facturas</p>
                <p className = 'item' >Perfil</p>
                <p className = 'item ' >Cerrar sesion</p>
        </nav>
    )
}
export default Header