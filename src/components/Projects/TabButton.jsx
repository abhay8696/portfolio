import React from 'react';
//styles
import "./Projects.css";

//classNames: commonWrapper- from App.css

//components
const TabButton = ({item, id, tabNumber, handleClick})=>{
    const isSelected = id === tabNumber ? "selectedTab" : " ";
    return (
        <button onClick={()=>handleClick(id)} className={`projectTab tab-${id} ${isSelected}`}>{item}</button>
    )
}

export default TabButton;