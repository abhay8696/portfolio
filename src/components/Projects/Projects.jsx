import React, { useState } from 'react';
//styles
import "./Projects.css";
import TabBar from './TabBar';

//classNames: commonWrapper- from App.css


//components
const TabButton = ({item, id, selected, handleClick})=>{
    const isSelected = id === selected ? "selectedTab" : " ";
    return (
        <button onClick={()=>handleClick(id)} className={`projectTab tab-${id} ${isSelected}`}>{item}</button>
    )
}

const Projects = () => {
    //states
    const [selected, setSelected] = useState(0);
    
    //functions
    const handleClick = (tabNum)=>{
        setSelected(tabNum);
    }

    return (
        <div id='projects' className='Projects commonWrapper'>
            <h1>Projects</h1>
            <TabBar selected={selected} handleClick={handleClick}/>
        </div>
    );
};

// problem solving
    // maze runner
// landing pages
    // law firm
    // fronntend mentor landing page
    // asiatco
// e com apps
    // qkart
    // frontend mentor product page
    // qtrip
    // frontend mentor form
// game
    //quo-react-dor
// other
    // qtify
    // countries
    // ip addresstracker
    // frontend mentor payment form

export default Projects;