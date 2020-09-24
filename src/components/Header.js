import React from 'react';
import './Header.css'

const Header = () =>{
    return(
        <nav className = 'header'>
                <p className = 'item' >Inicio</p>
                <p className = 'item' >Tareas</p>
                <p className = 'item' >Deudores</p>
                <p className = 'item' >Lotes</p>
                <p className = 'item' >Proveedores</p>
                <p className = 'item' >Facturas</p>
                <p className = 'item' >Perfil</p>
                <p className = 'item signout' >Cerrar sesion</p>
        </nav>
    )
}
export default Header