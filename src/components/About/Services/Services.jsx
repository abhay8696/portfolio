import React from 'react';
//styles
import "./services.css";
//components
import websiteIcon from "../../../assets/website.svg";
import htmlIcon from "../../../assets/html.svg";
import apiIcon from "../../../assets/api.svg";
import shoppingCartIcon from "../../../assets/shoppingCart.svg";
import googleIcon from "../../../assets/google.svg";
import serverIcon from "../../../assets/serverIcon.svg"


const serviesArr = [
    {name: "Landing page for bussinesses", icon: websiteIcon},
    {name: "custom web app development", icon: htmlIcon},
    {name: "API development", icon: apiIcon},
    {name: "E-commerce Platform Development", icon: shoppingCartIcon},
    {name: "SEO based Websites", icon: googleIcon},
    {name: "Backend development", icon: serverIcon},
];

const Services = () => {
    //functions
    const displayCards = () =>{
        return serviesArr.map(item => {
            return (
                <div className='serviceCard'>
                    <img className='serviceIcon' alt='service icon' src={item.icon}/>
                    <span className='serviceName'>{item.name}</span>
                </div>
            )
        })
    } 
    return (
        <div className='services'>
            <h3>services</h3>
            <div className='servicesGrid'>
                {displayCards()}
            </div>
        </div>
    );
};

export default Services;