import React from 'react';
//styles
import "./ProjectInfo.css";
//assets
import closeIcon from "../../../assets/closeIcon.svg"

const ProjectInfo = props => {
    if(!props) return;
    const { projectModal, toggleProjectModal } = props;
    
    // const { cardName, gif, github, head, img, link, subtext } = projectModal?.projectData;
    //functions
    const wrapperStyle = () => {
        return projectModal.visible ? 'commonWrapper commonBackgroundGrey ProjectInfo-wrapper wrapper-show' : 'commonWrapper commonBackgroundGrey ProjectInfo-wrapper wrapper-hide'
    }
    
    return (
        <div 
        className={wrapperStyle()}
        onClick={()=> console.log(projectModal)}
        >
            <div className='projectInfo-top'>
                <h1>{projectModal?.projectData?.head}</h1>
                <img src={closeIcon} alt='close button' onClick={()=> toggleProjectModal(null)}/>
            </div>
            <div className='projectInfo-mid'>
                <img src={ projectModal?.projectData?.gif} alt={ projectModal?.projectData?.cardName} className='projectInfo-img'/>
                <p className='projectInfo-subtext'>{ projectModal?.projectData?.subtext}</p>
            </div>
        </div>
    );
};

export default ProjectInfo;