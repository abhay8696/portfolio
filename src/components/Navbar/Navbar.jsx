import React, { useState } from 'react';
//styles
import "./Navbar.css";
import menuIcon from "../../assets/menuIcon.svg"
import closeIcon from "../../assets/closeIcon.svg"


const NavList = ({ulClasses, liClasses, toggleNav})=>{

    return (
        <ul className = {ulClasses} onClick={toggleNav}>
            <li id="delay1" className={liClasses}>Projects</li>
            <li id="delay2" className={liClasses}>About</li>
            <li id="delay3" className={liClasses}>Contact</li>
            {liClasses.includes("navLinks-sm") && <li id="delay3" className={liClasses}><img src={closeIcon}/></li>}
        </ul>
    )
}

const Navbar = () => {
    const [navLinkPosition, setNavlinkPosition] = useState("linkOut");
    const [navListPosition, setNavListPosition] = useState("navListOut");

    const handleClick = ()=>{
        const pos = navLinkPosition === "linkOut" ? "linkIn" : "linkOut";
        const navListPos = navListPosition === "navListOut" ? "navListIn" : "navListOut";
        setNavlinkPosition(pos)
        setNavListPosition(navListPos)
    }
    return (
        <nav>
            <h1 className='brand'>{'</>Abhay'}</h1>
            <NavList ulClasses = "navList navList-bg" liClasses = "navLinks navLinks-bg hoverAction"/>
            <NavList toggleNav={handleClick} ulClasses = {`navList navList-sm ${navListPosition}`} liClasses = {`navLinks navLinks-sm ${navLinkPosition}`}/>
            <img className='menuIcon' src={menuIcon} onClick={handleClick}/>
        </nav>
    );
};

export default Navbar;