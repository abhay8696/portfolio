import React, { useState } from 'react';
//styles
import "./Projects.css";
import TabBar from './TabBar';
//assets
//components
import Card from './Card/Card';
import { apiArr, ecomArr, gamesArr, landingPagesArr, psdsArr } from '../../../functions/projectsData';

//classNames: commonWrapper- from App.css

const Projects = () => {
    //states
    const [tabNumber, setTabNumber] = useState(1);
    
    //functions
    const handleClick = (tabNum)=>{
        setTabNumber(tabNum);
    }
    const displayCard = () => {
        return psdsArr.map(item => {
            const { head, cardName, subtext, link, github, img, gif } = item;
            return (
                <Card 
                    cardName= {cardName} 
                    head={head} 
                    subtext={subtext}
                    link={link}
                    github={github}
                    img={img}
                    gif={gif}
                />
            )
        })
    }

    return (
        <div id='projects' className='Projects commonWrapper'>
            <h1>Projects</h1>
            <TabBar tabNumber={tabNumber} handleClick={handleClick}/>
            <div className='tabPageWrapper'>
                <div className='tabPage'>
                    {displayCard()}
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