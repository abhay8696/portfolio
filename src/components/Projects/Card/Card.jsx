import React, { useRef, useState } from 'react';
//styles
import "./Card.css"
//assets
import medifyGif from "../../../assets/medifyGif.gif"
const Card = () => {
    const [hover, setHover] = useState(false)
    return (
        <div 
        className='Card'
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        >
            <div className={hover ? "cardGif cardFace" : "cardImg cardFace"} >
                {/* <img src={medifyGif} alt='' /> */}
            </div>
            <div className='cardText'>
                <div className='cardHead'>Medify</div>
                <p className='CardSubtext'>
                    React-based web application/landing page that allows users to find medical centers in a specific state and city across the USA and book appointments.
                </p>
            </div>
        </div>
    );
};

export default Card;