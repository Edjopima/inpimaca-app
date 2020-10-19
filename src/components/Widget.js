import React from 'react';
import './Widget.css';
import WidgetContent from './WidgetContent'

const Widget = ({color})=>{
    return(
        <div className={'flex '+ color}>
            <p className='titulo'>Titulo</p>
            <div className='contenido'>
            <WidgetContent color={color}/>
            </div>
        </div>
    );
}

export default Widget