import React from 'react';
import './WidgetContent.css'


const tarea=['tarea1','tarea2','tarea3'];

const WidgetContent = ({color})=>{
    return(
        <ul className='WidgetContent'>
        {tarea.map((i,u)=> (u===tarea.length - 1)?
        <li className={'WidgetContent-item-last '+color}>{i}</li>:
        <li className={'WidgetContent-item '+color}>{i}</li>)
        }
        </ul>
    )
}

export default WidgetContent;