import React from 'react';
//styles
import "./Skills.css";

const SkillCard = props => {
    const { icon, skillText } = props;
    return (
        <div className='SkillCard'>
            <img src={icon} alt={skillText} className='skillIcon'/>
            <span className='skillText'>{skillText}</span>
        </div>
    );
};

export default SkillCard;