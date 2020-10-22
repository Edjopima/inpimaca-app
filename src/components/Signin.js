import React, {useState} from 'react';
import './Signin.css'
import logo from './LOGO.JPG'

const Signin= ()=>{
    const onButtonSubmit= ()=>{
        console.log(email,password);
    }

    const [email, setEmail]=useState('');
    const [password,setPassword]= useState('');

    return(
        <div className='signinForm'>
            <img alt='logo' src={logo} className='logo'/>
            <h1 className='title'>Iniciar Sesion</h1>
            <input onChange={(event)=>setEmail(event.target.value)} placeholder="Usuario" type="text" className="input"/>
            <input onChange={(event)=>setPassword(event.target.value)} placeholder="Contraseña" type="password" className="input"/>
            <button onClick={onButtonSubmit} className='boton'>Iniciar Sesion</button>
        </div>
        )
}

export default Signin;