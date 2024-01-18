import React, { useState } from 'react';
//styles
import "./Navbar.css";
import menuIcon from "../../assets/menuIcon.svg"


const NavList = ({ulClasses, liClasses})=>{

    return (
        <ul className = {ulClasses}>
            <li id="delay1" className={liClasses}>Projects</li>
            <li id="delay2" className={liClasses}>About</li>
            <li id="delay3" className={liClasses}>Contact</li>
        </ul>
    )
}

const Navbar = () => {
    const [navLinkPosition, setNavlinkPosition] = useState("linkOut");

    const handleClick = ()=>{
        const pos = navLinkPosition === "linkOut" ? "linkIn" : "linkOut";
        setNavlinkPosition(pos)
    }
    return (
        <nav>
            <h1 className='brand'>{'</>Abhay'}</h1>
            <NavList ulClasses = "navList navList-bg" liClasses = "navLinks navLinks-bg hoverAction"/>
            <NavList ulClasses = {`navList navList-sm`} liClasses = {`navLinks navLinks-sm ${navLinkPosition}`}/>
            <img className='menuIcon' src={menuIcon} onClick={handleClick}/>
        </nav>
    );
};

export default Navbar;