import React from 'react';
import './Widget.css';
import WidgetContent from './WidgetContent'


const Widget = ()=>{
    return(
        <div className='flex'>
            <p className='titulo'>Titulo</p>
            <div className='contenido'>
                <WidgetContent/>
            </div>
        </div>
    );
}

export default Widget