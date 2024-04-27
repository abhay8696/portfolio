import React, { useRef, useState } from 'react';
//styles
import "./Card.css";


const Card = props => {
    //props
    const { cardName, head, subtext } = props;
    //states
    const [hover, setHover] = useState(false)
    return (
        <div 
        className='Card'
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        >
            <div className={hover ? `${cardName}Gif cardFace` : `${cardName}Img cardFace`} ></div>
            <div className='cardText'>
                <div className='cardHead'>{head}</div>
                <p className='CardSubtext'>{subtext}</p>
            </div>
        </div>
    );
};

export default Card;