import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
    return ( <
        div className = "about-us-container" >
        <
        div className = "container py-5" >
        <
        h1 className = "text-center mb-5" > About Us < /h1> <
        div className = "row" >
        <
        div className = "col-md-6 mb-4" >
        <
        h3 > Our Mission < /h3> <
        p > We strive to provide a seamless and secure platform
        for users to manage their content and collaborate effectively.Our goal is to empower individuals and organizations with intuitive tools
        for better productivity. < /p> <
        /div> <
        div className = "col-md-6 mb-4" >
        <
        h3 > Our Vision < /h3> <
        p > To become the leading platform
        for content management and collaboration, setting new standards in user experience and security
        while fostering innovation and creativity. < /p> <
        /div> <
        /div> <
        div className = "row mt-4" >
        <
        div className = "col-md-4 mb-4" >
        <
        div className = "feature-box text-center p-4" >
        <
        i className = "fas fa-shield-alt mb-3" > < /i> <
        h4 > Secure < /h4> <
        p > Your data security is our top priority.We implement the latest security measures to protect your information. < /p> <
        /div> <
        /div> <
        div className = "col-md-4 mb-4" >
        <
        div className = "feature-box text-center p-4" >
        <
        i className = "fas fa-bolt mb-3" > < /i> <
        h4 > Fast < /h4> <
        p > Experience lightning - fast performance with our optimized platform designed
        for efficiency. < /p> <
        /div> <
        /div> <
        div className = "col-md-4 mb-4" >
        <
        div className = "feature-box text-center p-4" >
        <
        i className = "fas fa-users mb-3" > < /i> <
        h4 > Collaborative < /h4> <
        p > Work together seamlessly with team members and share resources effortlessly. < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default AboutUs;