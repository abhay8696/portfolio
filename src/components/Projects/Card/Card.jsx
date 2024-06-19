import React, { useRef, useState } from 'react';
//assets
import moreInfoImg from "../../../assets/info.svg";
import externalLinkImg from "../../../assets/external-link.svg";
import githubImg from "../../../assets/githubIcon.svg";
//components
//styles
import "./Card.css";

const Card = props => {
    //props
    const { cardData, toggleProjectModal } = props;
    const { head, cardName, subtext, link, github, img, gif } = cardData;
    //states
    const [hover, setHover] = useState(false);
    //sub-components
    const CardOptions = () => {
        return(
            <div className='CardOptions'>
                {/* <span className='cardLinks' onClick={(e)=>toggleProjectModal(cardData)}>
                    <img className="cardOptionsImg" src={moreInfoImg} alt='more info' />
                    <span className='cardOptionText'>more info</span>
                </span> */}
                <a className='cardLinks' href={github} target='_blank'>
                    <img className="cardOptionsImg" src={githubImg} alt='github link' />
                    <span className='cardOptionText'>code</span>
                </a>
                <a className='cardLinks' href={link} target='_blank'>
                    <img className="cardOptionsImg" src={externalLinkImg} alt='website link' />
                    <span className='cardOptionText'>demo</span>
                </a>
            </div>
        )
    }
    return (
        <div 
        className='Card'
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        >
            <div 
             className="cardFace" 
             style={hover ? {backgroundImage: `url(${gif})`} : {backgroundImage: `url(${img})`}}
            ></div>
            <div className='cardText'>
                <div className='cardHead'>{head}</div>
                <p className='CardSubtext'>
                    {subtext}
                    {hover ? <CardOptions /> : null}
                </p>
            </div>
        </div>
    );
};

export default Card;