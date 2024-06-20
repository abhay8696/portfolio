import React, { useState } from 'react';
//styles
import "./Projects.css";
import TabBar from './TabBar';
import Card from './Card/Card';
import { apiArr, ecomArr, gamesArr, landingPagesArr, psdsArr } from '../../../functions/projectsData';
import ProjectInfo from './ProjectInfo/ProjectInfo';

//classNames: commonWrapper- from App.css

const Projects = () => {
    //states
    const [tabNumber, setTabNumber] = useState(1);
    const [projectModal, setProjectModal] = useState({
        visible: false,
        projectData: null
    })
    
    //functions
    const handleClick = (tabNum)=>{
        setTabNumber(tabNum);
    }
    const toggleProjectModal = (data)=> setProjectModal(pre=> {
        return {projectData: data, visible: !pre.visible}
    });
    //components
    const DisplayCard = () => {
        const all = [psdsArr, landingPagesArr, ecomArr, gamesArr, apiArr].flat();
        let projects = [psdsArr, landingPagesArr, ecomArr, gamesArr, apiArr, all];
        // console.log(all)
        return projects[tabNumber].map(cardData => {
            const { cardName } = cardData;
            return (
                <Card 
                    cardData={cardData}
                    key={`card-${cardName}`}
                    toggleProjectModal={toggleProjectModal}
                />
            )
        })
    }


    return (
        <div id='projects' className='Projects commonWrapper'>
            <h2>My Works</h2>
            <TabBar tabNumber={tabNumber} handleClick={handleClick}/>
            {/* <div className='tabPageWrapper'> */}
                <div className='tabPage'>
                    <DisplayCard />
                </div>
            {/* </div> */}
            {/* <ProjectInfo projectModal={projectModal} toggleProjectModal={toggleProjectModal}/> */}
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