import React, { useEffect, useState } from "react";
import "./../styles/ProfilePage.css";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
    const [userEmail, setUserEmail] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const history = useHistory();
    const menuItems = [
        "Dashboard",
        "My Profile",
        "My Files",
        "About",
        "Contact us",
        "Settings"
    ];

    useEffect(() => {
        const email = sessionStorage.getItem('userEmail');
        if (!email) {
            history.push('/signin');
        } else {
            setUserEmail(email);
        }
    }, [history]);

    const handleLogout = () => {
        sessionStorage.removeItem('userEmail');
        history.push('/signin');
    };

    const handleMenuClick = (item) => {
        switch (item) {
            case "About":
                history.push("/about");
                break;
            case "Contact us":
                history.push("/contact");
                break;
            case "My Files":
                history.push("/editor");
                break;
            default:
                break;
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to save the form data
        setIsEditing(false);
    };

    return ( <
        div className = "profile-container" > { /* Sidebar */ } <
        div className = "sidebar" >
        <
        div className = "profile-info" >
        <
        img src = "https://storage.googleapis.com/a1aa/image/D-0tVFX1mu9Xm__4B5K3U5o3b_twkFakAuM1jwxo7NM.jpg"
        alt = "User avatar"
        className = "avatar" /
        >
        <
        span className = "username" > { userEmail ? userEmail.split('@')[0].substring(0, 2).toUpperCase() : 'GU' } <
        /span> <
        /div> <
        nav >
        <
        ul > {
            menuItems.map((item, index) => ( <
                li key = { index } >
                <
                button onClick = {
                    () => handleMenuClick(item) }
                className = { `menu-item ${index === 0 ? "active" : ""}` } >
                { item } <
                /button> <
                /li>
            ))
        } <
        /ul> <
        /nav> <
        /div>

        { /* Main Content */ } <
        div className = "main-content" >
        <
        div className = "card" >
        <
        div className = "user-details" >
        <
        img src = "https://storage.googleapis.com/a1aa/image/D-0tVFX1mu9Xm__4B5K3U5o3b_twkFakAuM1jwxo7NM.jpg"
        alt = "User avatar"
        className = "avatar" /
        >
        <
        div >
        <
        h2 > { userEmail ? userEmail.split('@')[0] : 'Guest' } < /h2> <
        p > User < /p> <
        /div> <
        button className = "edit-icon"
        onClick = { handleEditToggle } >
        <
        i className = "fas fa-pencil-alt" > < /i> <
        /button> <
        /div>

        <
        form onSubmit = { handleSubmit } >
        <
        label htmlFor = "email" > Email ID < /label> <
        input type = "email"
        id = "email"
        value = { userEmail }
        readOnly /
        >

        <
        div className = "input-group" >
        <
        div >
        <
        label htmlFor = "password" > Password < /label> <
        input type = "password"
        id = "password"
        readOnly = {!isEditing }
        /> <
        /div> <
        div >
        <
        label htmlFor = "retype-password" > Re - type Password < /label> <
        input type = "password"
        id = "retype-password"
        readOnly = {!isEditing }
        /> <
        /div> <
        /div>

        <
        label > DOB < /label> <
        div className = "bod-group" >
        <
        input type = "text"
        placeholder = "Day"
        readOnly = {!isEditing }
        /> <
        input type = "text"
        placeholder = "Month"
        readOnly = {!isEditing }
        /> <
        input type = "text"
        placeholder = "Year"
        readOnly = {!isEditing }
        /> <
        /div>

        {
            isEditing && ( <
                div className = "button-group" >
                <
                button type = "submit"
                className = "save-btn" > Save < /button> <
                button type = "button"
                className = "cancel-btn"
                onClick = {
                    () => setIsEditing(false) } >
                Cancel <
                /button> <
                /div>
            )
        } <
        /form>

        <
        div className = "logout" >
        <
        input type = "checkbox"
        id = "logout"
        onChange = { handleLogout }
        /> <
        label htmlFor = "logout" > Logout < /label> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default ProfilePage;