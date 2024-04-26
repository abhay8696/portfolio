import React, { useState } from 'react';
//styles
import "./Projects.css";
import TabBar from './TabBar';

//classNames: commonWrapper- from App.css

const Projects = () => {
    //states
    const [tabNumber, setTabNumber] = useState(1);
    
    //functions
    const handleClick = (tabNum)=>{
        setTabNumber(tabNum);
    }

    return (
        <div id='projects' className='Projects commonWrapper'>
            <h1>Projects</h1>
            <TabBar tabNumber={tabNumber} handleClick={handleClick}/>
        </div>
    );
};

// problem solving
    // maze runner
// landing pages
    // law firm
    // fronntend mentor landing page
    // asiatco
    // medify
// e com apps
    // qkart
    // frontend mentor product page
    // qtrip
    // frontend mentor form
// games
    //quo-react-dor
// other
    // qtify
    // countries
    // ip addresstracker
    // frontend mentor payment form

export default Projects;