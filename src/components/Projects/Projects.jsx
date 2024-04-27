import React, { useState } from 'react';
//styles
import "./Projects.css";
import TabBar from './TabBar';
//assets
//components
import Card from './Card/Card';

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
            <div className='tabPageWrapper'>
                <div className='tabPage'>
                    <Card cardName= "medify" head="medify" subtext="React-based web application/landing page that allows users to find medical centers in a specific state and city across the USA and book appointments."/>
                </div>
            </div>
        </div>
    );
};

// problem solving
    // maze runner
//games
    // quo-react-dor
// landing pages
    // law firm - done
    // sunnyside - fronntend mentor landing page
    // asiatco
    // medify - done
    // logistics company
// e com apps
    // qkart
    // frontend mentor product page
    // qtrip
    // frontend mentor form
// API's
    // qtify
    // countries
    // ip addresstracker

export default Projects;