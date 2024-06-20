import React, { useState } from 'react';
//styles
import "./Contact.css";
//assets
import phoneIcon from "../../assets/phoneIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";
import locationIcon from "../../assets/locationIcon.svg";


const Contact = () => {
    //functions
    const handleSubmit = event => {
        event.preventDefault();
        console.log(event)
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
                    <span className='contactCardName'>{name}</span>
                </div>
                <span className='contactCardValue'>{value}</span>
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

                <form className='contactForm' onSubmit={handleSubmit}>
                    <div className='formTop'>
                        <div className='heyAbhay'>Hey Abhay, </div>
                        <textarea placeholder='Write your message...' rows="10" required/>
                    </div>
                    <div className='formBottom'>
                        <label for="contact-name">Cheers, </label>
                        <input id="contact-name" type='text' placeholder='Name' required/>
                        <input type='email' placeholder='Email' required/>
                        <input type='number' placeholder='Phone' />
                        <button type='submit'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;