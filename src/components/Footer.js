import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return ( <
        footer className = "footer bg-dark text-light py-4 mt-auto" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-md-4 mb-3" >
        <
        h5 > Quick Links < /h5> <
        ul className = "list-unstyled" >
        <
        li > < Link className = "text-light"
        to = "/" > Home < /Link></li >
        <
        li > < Link className = "text-light"
        to = "/about" > About Us < /Link></li >
        <
        li > < Link className = "text-light"
        to = "/contactus" > Contact Us < /Link></li >
        <
        /ul> <
        /div> <
        div className = "col-md-4 mb-3" >
        <
        h5 > Contact Info < /h5> <
        ul className = "list-unstyled" >
        <
        li > Email: info @myapp.com < /li> <
        li > Phone: (123) 456 - 7890 < /li> <
        li > Address: 123 App Street < /li> <
        /ul> <
        /div> <
        div className = "col-md-4 mb-3" >
        <
        h5 > Follow Us < /h5> <
        div className = "social-links" >
        <
        a href = "https://facebook.com"
        className = "text-light me-3" > < i className = "fab fa-facebook" > < /i></a >
        <
        a href = "https://twitter.com"
        className = "text-light me-3" > < i className = "fab fa-twitter" > < /i></a >
        <
        a href = "https://linkedin.com"
        className = "text-light" > < i className = "fab fa-linkedin" > < /i></a >
        <
        /div> <
        /div> <
        /div> <
        div className = "row mt-3" >
        <
        div className = "col text-center" >
        <
        p className = "mb-0" > & copy; 2024 MyApp.All rights reserved. < /p> <
        /div> <
        /div> <
        /div> <
        /footer>
    );
};

export default Footer;