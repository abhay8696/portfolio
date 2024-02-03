import React from 'react';
//styles
import "./Skills.css";

const SkillCard = props => {
    const { icon, skillText } = props;
    return (
        <div className='SkillCardBig'>
            <img src={icon} alt={skillText} className='skillIconBig'/>
            <span className='skillTextBig'>{skillText}</span>
        </div>
    );
};

export default SkillCard;