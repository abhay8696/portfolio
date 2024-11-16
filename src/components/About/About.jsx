import React from "react";
//styles
import "./About.css";
//components
import Skills from "./Skills/Skills";
//assets
import myDP from "../../assets/me2.jpg";
import Services from "./Services/Services";

const para1 =
    "With a Bachelor of Science and a rich blend of 9 years as a mechanical technician at Indian Railways, I bring a unique mix of hands-on technical experience and software development expertise. My career journey has led me to pursue my passion for technology and programming, where I now work as a dedicated software developer and freelancer, providing tailored tech solutions to clients globally.";
const para2 =
    "I specialize in backend development, frontend frameworks, and complete software project cycles. My technical background, coupled with my problem-solving mindset, enables me to approach software challenges with precision and innovation. Whether building robust web applications, developing secure and scalable backend systems, or optimizing performance, I bring a meticulous approach and dedication to every project.";
const para3 =
    "Currently based in Pune, India, I am committed to staying at the forefront of technology. As a freelancer, I work collaboratively with clients to understand their unique needs, delivering high-quality solutions that meet modern demands.";

const About = () => {
    return (
        <div className="About commonWrapper" id="about">
            <div className="aboutInfo">
                <aside className="about-leftSide">
                    <div className="aboutTop">
                        <div className="aboutTitle">
                            <h2 className="aboutName">Abhay Kamble</h2>
                            <h3 className="aboutRole">Software Developer</h3>
                        </div>
                        <img
                            src={myDP}
                            alt="my image"
                            className="aboutImage-left"
                        />
                    </div>
                    <div className="aboutTexts">
                        <p className="aboutPara">{para1}</p>
                        <p className="aboutPara">{para2}</p>
                        <p className="aboutPara">{para3}</p>
                    </div>
                </aside>
                <aside className="about-rightSide">
                    <img
                        src={myDP}
                        alt="my image"
                        className="aboutImage-right"
                    />
                </aside>
            </div>
            <Services />
            <Skills />
        </div>
    );
};

export default About;
