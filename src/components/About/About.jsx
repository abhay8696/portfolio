import React from 'react';
//styles
import "./About.css";
//components
import Skills from './Skills/Skills';
//assets
import myDP from "../../assets/me2.jpg";
import Services from './Services/Services';

const About = () => {
    return (
        <div className='About commonWrapper' id='about'>
            <div className='aboutInfo'>
                <aside className='about-leftSide'>
                    <div className='aboutTop'>
                        <div className='aboutTitle'>
                            <h2 className='aboutName'>Abhay Kamble</h2>
                            <h3 className='aboutRole'>Software Developer</h3>
                        </div>
                        <img src={myDP} alt='my image' className='aboutImage-left'/>
                    </div>
                    <div className='aboutTexts'>
                        <p className='aboutPara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestias ab voluptatibus possimus aspernatur impedit, cum a eos reiciendis voluptate, explicabo iste nemo. Ducimus a commodi beatae nihil ipsa modi culpa nisi odio maxime laborum, inventore alias, aspernatur facere doloremque quo corporis nostrum quisquam tenetur atque, asperiores officiis. Commodi, molestiae?</p>
                        <p className='aboutPara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestias ab voluptatibus possimus aspernatur impedit, cum a eos reiciendis voluptate, explicabo iste nemo. Ducimus a commodi beatae nihil ipsa modi culpa nisi odio maxime laborum, inventore alias, aspernatur facere doloremque quo corporis nostrum quisquam tenetur atque, asperiores officiis. Commodi, molestiae?</p>
                        <p className='aboutPara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestias ab voluptatibus possimus aspernatur impedit, cum a eos reiciendis voluptate, explicabo iste nemo. Ducimus a commodi beatae nihil ipsa modi culpa nisi odio maxime laborum, inventore alias, aspernatur facere doloremque quo corporis nostrum quisquam tenetur atque, asperiores officiis. Commodi, molestiae?</p>
                    </div>
                </aside>
                <aside className='about-rightSide'>
                    <img src={myDP} alt='my image' className='aboutImage-right'/>
                </aside>
            </div>
            <Services />
            <Skills />
        </div>
    );
};

export default About;