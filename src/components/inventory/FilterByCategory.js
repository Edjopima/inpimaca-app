import React from 'react';
import { useDispatch } from 'react-redux';
import './FilterByCategory.css'
let todo='Filter-selected';
let viveres,dulces,lacteos,aseoPersonal,otros = '';

const FilterByCategory = ()=>{
    const dispatch = useDispatch();
    const dispatchFilter = (data)=>{
        dispatch({
            type:'FILTER_BY_CATEGORY',
            payload:data
        })
    }
    const clearSelection= ()=>{
        todo='';
        viveres='';
        dulces='';
        lacteos=''
        aseoPersonal=''
        otros=''
    }
    const handleFilter = (category) =>{
        switch(category){
            case 'T':{
                clearSelection();
                todo='Filter-selected';
                dispatchFilter(category);
                break;
            }
            case 'V':{
                clearSelection();
                viveres='Filter-selected';
                dispatchFilter(category);
                break
            }
            case 'D':{
                clearSelection();
                dulces='Filter-selected';
                dispatchFilter(category)
                break
            }
            case 'L':{
                clearSelection();
                lacteos='Filter-selected';
                dispatchFilter(category);
                break
            }
            case 'AP':{
                clearSelection();
                aseoPersonal='Filter-selected';
                dispatchFilter(category);
                break
            }
            case 'O':{
                clearSelection();
                otros='Filter-selected';
                dispatchFilter(category);
                break
            }
            default:{
                clearSelection();
                break;
            }
        }
    }
    return(
        <div className="Filter">
                <p className={`Filter-item ${todo}`} onClick={()=>handleFilter("T")}>Todo</p>
                <p className={`Filter-item ${viveres}`} onClick={()=>handleFilter("V")}>Viveres</p>
                <p className={`Filter-item ${dulces}`} onClick={()=>handleFilter("D")}>Dulces</p>
                <p className={`Filter-item ${lacteos}`} onClick={()=>handleFilter("L")}>Lacteos</p>
                <p className={`Filter-item ${aseoPersonal}`} onClick={()=>handleFilter("AP")} >Aseo Personal</p>
                <p className={`Filter-item ${otros}`} onClick={()=>handleFilter("O")}>Otros</p>
        </div>
    )
}

export default FilterByCategory;