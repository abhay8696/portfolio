import React from "react";
//styles
import "./Hero.css";
import myDP from "../../assets/me3.jpeg";
import instagramIcon from "../../assets/instagramIcon.svg";
import linkedInIcon from "../../assets/linkedInIcon2.svg";
import githubIcon from "../../assets/githubIcon.svg";
import gmailIcon from "../../assets/gmailIcon.svg";

/*
 classNames: animeOnVisible, hoverAction are defined in app.css
*/

const bio =
    "Once upon a time in a world filled with pixels and code, there was a coder who decided to embark on a quest to conquer the digital realm. Armed with a keyboard and a passion for pixels, he built many industry grade projects from scratch and got armed with many technological skills useful for tech projects.";
const Hero = () => {
    return (
        <header className="hero" id="hero">
            <div className="heroInto">
                <h1 id="hey">hey!</h1>
                <h1 id="iAm">I'm</h1>
                <img src={myDP} className="myDP" />
                <h1 id="abhay">abhay.</h1>
            </div>
            <article className="animeOnVisible">
                {bio}
                <br />
                He is known as the
                <span id="designation" className="animeOnVisible">
                    software developer.
                </span>
            </article>
            <div className="links">
                <div className="socialLinks animeOnVisible">
                    <a
                        className="hoverAction"
                        href="https://www.linkedin.com/in/abhay8696/"
                        target="_blank"
                    >
                        <img src={linkedInIcon} alt="linkedIn icon" />
                    </a>
                    <a
                        className="hoverAction"
                        href="https://github.com/abhay8696/"
                        target="_blank"
                    >
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    {/* <a className='hoverAction' href='#' target='_blank'>
                        <img src={instagramIcon} alt='instagram icon' />
                    </a> */}
                </div>
                <div className="email animeOnVisible">
                    <img src={gmailIcon} alt="gmail icon" />
                    <span>kambleabhaygautam@gmail.com</span>
                </div>
            </div>
        </header>
    );
};

export default Hero;
