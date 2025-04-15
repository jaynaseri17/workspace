import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const isLoggedIn = sessionStorage.getItem('userEmail') !== null;
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('userEmail');
        window.location.href = '/signin';
    };

    return ( <
        nav className = "nav-container" >
        <
        div className = "nav-content" >
        <
        Link className = "nav-logo"
        to = "/" > Write It < /Link>

        <
        button className = "nav-toggle"
        onClick = {
            () => setIsOpen(!isOpen)
        }
        aria label = "Toggle navigation" >
        <
        span className = "nav-toggle-icon" > < /span> < /
        button >

        <
        div className = { `nav-menu ${isOpen ? 'nav-menu-open' : ''}` } >
        <
        ul className = "nav-list" >
        <
        li className = "nav-item nav-dropdown" >
        <
        a className = "nav-link"
        href = "#"
        onClick = {
            (e) => {
                e.preventDefault();
                e.currentTarget.parentElement.classList.toggle('dropdown-active');
            }
        } >
        Menu <
        /a> <
        ul className = "dropdown-list" >
        <
        li > < Link className = "dropdown-link"
        to = "/" > Home < /Link></li >
        <
        li > < Link className = "dropdown-link"
        to = "/editor" > Text Editor < /Link></li >
        <
        li > < Link className = "dropdown-link"
        to = "/about" > About Us < /Link></li >
        <
        li > < Link className = "dropdown-link"
        to = "/contactus" > Contact Us < /Link></li >
        <
        /ul> < /
        li > <
        /ul> < /
        div >

        <
        div className = "nav-auth" > {!isLoggedIn ? ( <
                >
                <
                Link to = "/signin"
                className = "nav-link" > Login < /Link> <
                Link to = "/signup"
                className = "nav-link" > Sign Up < /Link> < / >
            ) : ( <
                div className = "nav-item nav-dropdown"
                style = {
                    { position: 'relative' }
                } >
                <
                button className = "nav-link profile-button"
                onClick = {
                    () => setIsProfileOpen(!isProfileOpen)
                } >
                <
                FontAwesomeIcon icon = { faUser }
                className = "profile-icon" / >
                <
                span > Profile < /span> < /
                button > <
                ul className = "dropdown-list"
                style = {
                    { display: isProfileOpen ? 'block' : 'none', zIndex: 1000 }
                } >
                <
                li >
                <
                Link to = "/pfp"
                className = "dropdown-link" >
                <
                FontAwesomeIcon icon = { faUser }
                /> My Profile < /
                Link > <
                /li> <
                li >
                <
                Link to = "/settings"
                className = "dropdown-link" >
                <
                FontAwesomeIcon icon = { faGear }
                /> Settings < /
                Link > <
                /li> <
                li >
                <
                button onClick = { handleLogout }
                className = "dropdown-link" >
                <
                FontAwesomeIcon icon = { faSignOutAlt }
                /> Logout < /
                button > <
                /li> < /
                ul > <
                /div>
            )
        } <
        /div> < /
        div > <
        /nav>
    );
};

export default Navbar;