import React, { useRef, useState } from 'react';
//styles
import "./Card.css";

const Card = props => {
    //props
    const { head, cardName, subtext, link, github, img, gif } = props;
    //states
    const [hover, setHover] = useState(false)
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
                <p className='CardSubtext'>{subtext}</p>
            </div>
        </div>
    );
};

export default Card;