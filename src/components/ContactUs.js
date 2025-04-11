import React, { useState } from "react";
import "./../styles/ContactUs.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return ( <
        div className = "contact-container" >
        <
        div className = "contact-card" >
        <
        h2 > Contact Us < /h2> <
        p > We 'd love to hear from you! Fill out the form below.</p> <
        form onSubmit = { handleSubmit } >
        <
        label htmlFor = "name" > Full Name < /label> <
        input type = "text"
        id = "name"
        name = "name"
        placeholder = "Enter your name"
        value = { formData.name }
        onChange = { handleChange }
        required /
        >

        <
        label htmlFor = "email" > Email Address < /label> <
        input type = "email"
        id = "email"
        name = "email"
        placeholder = "Enter your email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >

        <
        label htmlFor = "subject" > Subject < /label> <
        input type = "text"
        id = "subject"
        name = "subject"
        placeholder = "Enter subject"
        value = { formData.subject }
        onChange = { handleChange }
        required /
        >

        <
        label htmlFor = "message" > Message < /label> <
        textarea id = "message"
        name = "message"
        rows = "5"
        placeholder = "Enter your message"
        value = { formData.message }
        onChange = { handleChange }
        required >
        < /textarea>

        <
        button type = "submit"
        className = "send-btn" > Send Message < /button> <
        /form> <
        /div> <
        /div>
    );
};

export default ContactUs;