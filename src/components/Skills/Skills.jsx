import React from 'react';
//styles
import "./Skills.css";
import jsIcon from "../../assets/jsIcon.svg";
import nodeIcon from "../../assets/nodeIcon.svg";
import htmlIcon from "../../assets/htmlIcon.svg";
import gitIcon from "../../assets/gitIcon.svg";
import cssIcon from "../../assets/cssIcon.svg";
import materialUiIcon from "../../assets/materialUiIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import bootstrap from "../../assets/bootstrapIcon.svg";
import ubuntuIcon from "../../assets/ubuntuIcon.svg";
import sassIcon from "../../assets/sassIcon.svg";
import mysqlIcon from "../../assets/mysqlIcon.svg";
import mongoIcon from "../../assets/mongoIcon.svg";
import nextIcon from "../../assets/nextIcon.svg";
//componenets
import SkillCard from './SkillCard';


const iconsArr = [
    {img: nodeIcon, text: "Node"},
    {img: reactIcon, text: "React"},
    {img: jsIcon, text: "JavaScript"},
    {img: gitIcon, text: "Git"},
    {img: htmlIcon, text: "HTML"},
    {img: nextIcon, text: "NextJS"},
    {img: cssIcon, text: "CSS"},
    {img: ubuntuIcon, text: "Linux"},
    {img: mongoIcon, text: "MongoDB"},
    {img: mysqlIcon, text: "MySQL"},
    {img: sassIcon, text: "Sass"},
    {img: bootstrap, text: "Bootstrap"},
    {img: materialUiIcon, text: "Material UI"},
]
//classNames: commonWrapper- from App.css
const Skills = () => {

    const displaySkillCards = ()=>{
        return iconsArr.map(card=>{
            const { img, text } = card;
            return <SkillCard icon={img} skillText={text} key={text}/>
        })
    }

    // console.log(displaySkillCards())
    return (
        <section className='commonWrapper Skills' id='skills'>
            <h1>Skills</h1>
            <section className='card-section'>
                {displaySkillCards()}
            </section>
        </section>
    );
};

export default Skills;