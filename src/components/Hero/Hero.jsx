import React from 'react';
//styles
import "./Hero.css"
import myDP from "../../assets/me1.jpg";
import instagramIcon from "../../assets/instagramIcon.svg";
import linkedInIcon from "../../assets/linkedInIcon2.svg";
import githubIcon from "../../assets/githubIcon.svg";
import gmailIcon from "../../assets/gmailIcon.svg";

/*
 classNames: animeOnVisible, hoverAction are defined in app.css
*/
const Hero = () => {
    return (
        <header className='hero'>
            <div className='heroInto'>
                <h1 id='hey'>hey!</h1>
                <h1 id='iAm'>I'm</h1>
                <img src={myDP} className='myDP'/>
                <h1 id='abhay'>abhay.</h1>
            </div>
            <article className='animeOnVisible'>I have built many industry grade projects from scratch and am armed with many technological skills useful for tech projects. Check out my projects below. :{")"}</article>
            <div className='links'>
                <div className='socialLinks animeOnVisible'>
                    <a className='hoverAction' href='#' target='_blank'>
                        <img src={linkedInIcon} alt='linkedIn icon' />
                    </a>
                    <a className='hoverAction' href='#' target='_blank'>
                        <img src={githubIcon} alt='github icon' />
                    </a>
                    <a className='hoverAction' href='#' target='_blank'>
                        <img src={instagramIcon} alt='instagram icon' />
                    </a>
                </div>
                <div className='email'>kambleabhaygautam@gmail.com</div>
            </div>
        </header>
    );
};

export default Hero;