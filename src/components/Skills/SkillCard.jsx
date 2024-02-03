import React from 'react';
//styles
import "./Skills.css";

const SkillCard = props => {
    const { icon, skillText, showAll } = props;

    const skillCardStyle_hide = 'SkillCardSmall SkillCardSmall-hide'
    const skillCardStyle_show = 'SkillCardSmall SkillCardSmall-show'
    return (
        <div className={showAll ? skillCardStyle_hide : skillCardStyle_show}>
            <img src={icon} alt={skillText} className='skillIcon'/>
            <span className='skillText'>{skillText}</span>
        </div>
    );
};

export default SkillCard;