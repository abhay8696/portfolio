import React, { useState } from 'react';

const FormComp = ({handleFormSubmit}) => {
    //states
    const [formData, setFormData] = useState({
        message: "",
        name: "",
        email: "",
        phone: ""
    });

    //functions
    const handleChange = event => {
        let updatedForm = {...formData};
        updatedForm[event.target.name] = event.target.value;
        setFormData({...updatedForm});
    }
    const handleSubmit = event => {
        event.preventDefault();
        handleFormSubmit(formData)
    }
    return(
        <form className='contactForm' onSubmit={handleSubmit}>
            <div className='formTop'>
                <div className='heyAbhay'>Hey Abhay, </div>
                <textarea onChange={handleChange} value={formData.message} name='message' placeholder='Write your message...' rows="10" required/>
            </div>
            <div className='formBottom'>
                <label for="contact-name">Cheers, </label>
                <input onChange={handleChange} value={formData.name} name="name" id="contact-name" type='text' placeholder='Name*' required/>
                <input onChange={handleChange} value={formData.email} name="email" type='email' placeholder='Email*' required/>
                <input onChange={handleChange} value={formData.phone} name="phone" type='number' placeholder='Phone' />
                <button type='submit'>Send Message</button>
            </div>
        </form>
    );
};

export default FormComp;