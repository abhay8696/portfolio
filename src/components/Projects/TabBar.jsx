import React from 'react';
//styles
import "./Projects.css";

//classNames: commonWrapper- from App.css

//components
import TabButton from './TabButton';

const TabBar = props => {
    //props
    const {tabNumber, handleClick} = props;

    //functions
    const displayTabs = ()=>{
        const data = ['Problem Solving', 'Landing Pages', 'E-com', 'Games', 'Frontend'];
        let id = 0;

        return data.map(item=>{
            return <TabButton key={`tabButton-${item}`} item={item} id={id++} tabNumber={tabNumber} handleClick={handleClick}/>
        })
    }

    return (
        <div className='tabBar'>
            {displayTabs()}
        </div>
    );
};

export default TabBar;