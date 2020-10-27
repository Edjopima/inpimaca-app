import React, {useState} from 'react';
import './Signin.css'
import logo from './LOGO.JPG'
import {useDispatch} from 'react-redux';

const Signin= ()=>{
    const dispatch = useDispatch();
    const onButtonSubmit= ()=>{
        fetch('https://inpimaca-api.herokuapp.com/iniciarSesion', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user,
                password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id){
                dispatch({
                    type:'SET_LOGED_USER',
                    payload:user
                });
            }
        })
        .catch(error => console.error(error))
    }

    const [user, setUser]=useState('');
    const [password,setPassword]= useState('');

    return(
        <div className='signinForm'>
            <img alt='logo' src={logo} className='logo'/>
            <h1 className='title'>Iniciar Sesion</h1>
            <input onChange={(event)=>setUser(event.target.value.toLowerCase())} placeholder="Usuario" type="text" className="input"/>
            <input onChange={(event)=>setPassword(event.target.value)} placeholder="Contraseña" type="password" className="input"/>
            <button onClick={onButtonSubmit} className='boton'>Iniciar Sesion</button>
        </div>
        )
}
export default Signin;