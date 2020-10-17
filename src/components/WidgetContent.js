import React from 'react';
import './WidgetContent.css'


const tarea=['tarea1','tarea2','tarea3'];

const WidgetContent = ()=>{
    return(
        <ul className='WidgetContent'>
        {tarea.map((i,u)=> (u===tarea.length - 1)?
        <li className='WidgetContent-item-last'>{i}</li>:
        <li className='WidgetContent-item'>{i}</li>)
        }
        </ul>
    )
}

export default WidgetContent;