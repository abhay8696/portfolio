import React from 'react';
//styles
import "./Projects.css";

//classNames: commonWrapper- from App.css

//components
const TabButton = ({item, id, selected, handleClick})=>{
    const isSelected = id === selected ? "selectedTab" : " ";
    return (
        <button onClick={()=>handleClick(id)} className={`projectTab tab-${id} ${isSelected}`}>{item}</button>
    )
}

const TabBar = props => {
    //props
    const {selected, handleClick} = props;

    //functions
    const displayTabs = ()=>{
        const data = ['Problem Solving', 'Landing Pages', 'E-com', 'Games', 'Frontend'];
        let id = 0;

        return data.map(item=>{
            return <TabButton item={item} id={id++} selected={selected} handleClick={handleClick}/>
        })
    }

    return (
        <div className='tabBar'>
            {displayTabs()}
        </div>
    );
};

export default TabBar;