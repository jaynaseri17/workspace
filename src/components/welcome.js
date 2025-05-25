import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
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
    const [isLoading, setIsLoading] = useState(false);
    const [processedText, setProcessedText] = useState('');
    const [error, setError] = useState(null);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

        if (!file) return;

        if (!allowedTypes.includes(file.type)) {
            setError('Please upload a valid image file (JPG, JPEG, or PNG)');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('image_input', file);

            const response = await axios.post('http://localhost:8082/process-document', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data && response.data.text_extraction && response.data.text_extraction.length > 0) {
                const extractedText = response.data.text_extraction.map(item => item.text).join('\n');
                setProcessedText(extractedText);
            } else {
                setError('No text was extracted from the image. Please ensure the image contains clear, readable text.');
            }
        } catch (error) {
            console.error('Error processing document:', error);
            setError('Error processing document. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleTextChange = (event) => {
        setProcessedText(event.target.value);
    };

    return (
        <div className="file-upload">
            <div className="upload-box">
                <label>
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleImageUpload}
                        hidden
                    />
                    <p>Upload Image</p>
                </label>
            </div>

            {error && <div className="error-message">{error}</div>}
            
            {isLoading && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Processing your image...</p>
                </div>
            )}

            {processedText && (
                <div className="output-box">
                    <textarea
                        value={processedText}
                        onChange={handleTextChange}
                        className="text-output"
                        placeholder="Processed text will appear here..."
                    />
                </div>
            )}
        </div>
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

import "./Welcome.css";

export default Welcome;