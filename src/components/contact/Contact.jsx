import React, { useState } from 'react';
//styles
import "./Contact.css";
//assets
import phoneIcon from "../../assets/phoneIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";
import locationIcon from "../../assets/locationIcon.svg";
import sentIcon from "../../assets/sentIcon.svg";
//components
import FormComp from './FormComp';


const Contact = () => {
    //states
    const [messageSent, setMessageSent] = useState(false);
    //funstions
    const handleFormSubmit = data => {
        console.log(data)
        setMessageSent(true);
    }
    //sub-component
    const ContactIconCard = ({icon, name, value}) => {
        //states
        const [hover, setHover] = useState(false);
        return (
            <div 
            className='ContactIconCard'
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            >
                <div className='ContactIconCard-left'>
                    <img src={icon} alt={`name-${icon}`} className='ContactIcon'/>
                    {/* <span className='contactCardName'>{name}</span> */}
                </div>
                <span className='contactCardValue'>{value}</span>
            </div>
        )
    }
    const SentIconComp = () => {
        return(
            <div className='messageSent'>
                <img src={sentIcon} alt='message sent icon' className='sentIcon'/>
                <span className='sentMessage'>Message Sent!</span>
            </div>
        )
    }

    return (
        <div id='contact' className='Contact commonWrapper'>
            <h2 className='skillsHead'>Contact</h2>
            <div className='contact-body'>
                <div className='contactIcons-section'>
                    <ContactIconCard icon={phoneIcon} name={"phone"} value="+91-9545831601" />
                    <ContactIconCard icon={emailIcon} name={"email"} value="kambleabhaygautam@gmail.com" />
                    <ContactIconCard icon={locationIcon} name={"location"} value="Pune, India" />
                </div>

                {
                    messageSent ? <SentIconComp /> : <FormComp handleFormSubmit={handleFormSubmit} />
                }
                

                

            </div>
        </div>
    );
};

export default Contact;