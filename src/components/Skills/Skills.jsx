import React, { useState } from 'react';
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
import arrowIcon from "../../assets/arrowIcon.svg"
import postmanIcon from "../../assets/postmanIcon.svg"
import firebaseIcon from "../../assets/firebaseIcon.svg"
//componenets
import SkillCard from './SkillCard';
import SkillCardBig from './SkillCardBig';


const iconsArr = [
    {img: nodeIcon, text: "Node"},
    {img: reactIcon, text: "React"},
    {img: jsIcon, text: "JavaScript"},
    {img: gitIcon, text: "Git"},
    {img: htmlIcon, text: "HTML"},
    {img: cssIcon, text: "CSS"},
    {img: ubuntuIcon, text: "Linux"},
    {img: mongoIcon, text: "MongoDB"},
    {img: mysqlIcon, text: "MySQL"},
    {img: sassIcon, text: "Sass"},
    {img: bootstrap, text: "Bootstrap"},
    {img: materialUiIcon, text: "Material UI"},
    {img: nextIcon, text: "NextJS"},
    {img: postmanIcon, text: "Postman"},
    {img: firebaseIcon, text: "Firebase"},
]
//classNames: commonWrapper- from App.css
const Skills = () => {
    const [showAll, setShowAll] = useState(false);

    let cardSectionSmall_class_blurBack = 'card-section-small blurBackground';

    const displaySkillCards = ()=>{
        return iconsArr.map(card=>{
            const { img, text } = card;
            return <SkillCard icon={img} skillText={text} key={text} showAll={showAll}/>
        })
    }

    const displaySkillCardsBig = ()=>{
        let delay = -3;
        return iconsArr.map(card=>{
            delay = delay+3;
            const { img, text } = card;
            return <SkillCardBig showAll={showAll} icon={img} skillText={text} key={`${text}Big`} animeDelay={delay} />
        })
    }

    // console.log(displaySkillCards())
    return (
        <section className='commonWrapper Skills' id='skills'>
            <div className='skillsHead'>
                <h1>Skills</h1>
                <button onClick={()=> setShowAll(!showAll)} className='toggleSkillsButton'>
                    <span>{!showAll ? "hide" : "show all"}</span>
                    <span><img className={showAll ? "showDown" : "showUp"} src={arrowIcon} alt="arrow icon" /></span>
                </button>
            </div>
            <section className={!showAll ? cardSectionSmall_class_blurBack : 'card-section-small'}>
                {displaySkillCards()}
            </section>
            <section className='card-caraousel'>
                {/* {displaySkillCardsBig()} */}
                {/* <SkillCardBig icon={nodeIcon} skillText={"Node"} key={`NodeBig`} /> */}
            </section>
        </section>
    );
};

export default Skills;