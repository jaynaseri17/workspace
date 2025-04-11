import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../index.css";

const Welcome = () => {
    return ( <
        div className = "welcome-container" >
        <
        Main / >
        <
        /div>
    );
};

const Main = () => {
    return ( <
        main className = "welcome-content" >
        <
        h1 className = "welcome-title" > Let 's begin writing...</h1> <
        p className = "welcome-description" > Transform your ideas into reality with our powerful text editor. < /p> <
        Link to = "/signup"
        className = "btn btn-primary btn-lg mb-4" > Sign up
        for free < /Link> <
        div className = "row g-4" >
        <
        div className = "col-md-6" >
        <
        FileUpload / >
        <
        /div> <
        div className = "col-md-6" >
        <
        AuthForm / >
        <
        /div> < /
        div > <
        /main>
    );
};

const FileUpload = () => {
    const [fileContent, setFileContent] = useState("");

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setFileContent(e.target.result);
            reader.readAsText(file);
        }
    };

    return ( <
        div className = "file-upload" >
        <
        div className = "upload-box" >
        <
        label >
        <
        input type = "file"
        onChange = { handleFileUpload }
        hidden / >
        <
        p > Upload < /p> < /
        label > <
        /div> <
        div className = "output-box" >
        <
        p > { fileContent || "Final Output" } < /p> < /
        div > <
        div className = "buttons" >
        <
        button > Convert < /button> <
        button > Download < /button> < /
        div > <
        /div>
    );
};

const AuthForm = () => {
    const [isSignup, setIsSignup] = useState(false);

    return ( <
        section className = "auth-form" >
        <
        div className = "form-toggle" >
        <
        button className = {!isSignup ? "active" : "" }
        onClick = {
            () => setIsSignup(false)
        } >
        Login <
        /button> <
        button className = { isSignup ? "active" : "" }
        onClick = {
            () => setIsSignup(true)
        } >
        Sign up <
        /button> < /
        div > <
        h2 > { isSignup ? "Sign Up" : "Login" } < /h2> <
        form > {
            isSignup && < input type = "text"
            placeholder = "Name"
            required / >
        } <
        input type = "email"
        placeholder = "Email"
        required / >
        <
        input type = "password"
        placeholder = { isSignup ? "Create Password" : "Password" }
        required / >
        <
        Link to = { isSignup ? "/signup" : "/signin" }
        className = "btn btn-primary" > { isSignup ? "Sign Up" : "Login" } < /Link> < /
        form > <
        div className = "social-login" >
        <
        button className = "google-btn" >
        <
        i className = "fab fa-google" > < /i> Login with Google < /
        button > <
        button className = "org-btn" >
        <
        i className = "fas fa-building" > < /i> Login with Organization < /
        button > <
        /div> < /
        section >
    );
};

export default Welcome;