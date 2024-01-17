import React from 'react';
//styles
import "./Hero.css"
import smiley from "../../assets/me1.jpg";
const Hero = () => {
    return (
        <header className='hero'>
            <div className='heroInto'>
                <h1 id='hey'>hey!</h1>
                <h1 id='iAm'>I'm</h1>
                <img src={smiley}/>
                <h1 id='abhay'>abhay.</h1>
            </div>
            <article>I have built many industry grade projects from scratch and am armed with many technological skills useful for tech projects. Check out my projects below. :{")"}</article>
        </header>
    );
};

export default Hero;