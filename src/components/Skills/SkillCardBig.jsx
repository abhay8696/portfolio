import React from 'react';
//styles
import "./Skills.css";

const SkillCardBig = props => {
    const { icon, skillText, animeDelay, showAll } = props;
    const greyBack = 'SkillCardBig commonBackgroundGrey'
    return (
        <div className= {!showAll ? "SkillCardBig" : greyBack} style={{animationDelay: `${animeDelay}s`}}>
            <img src={icon} alt={skillText} className='skillIconBig'/>
            {!showAll ? null : <span className='skillTextBig'>{skillText}</span>}
        </div>
    );
};

export default SkillCardBig;