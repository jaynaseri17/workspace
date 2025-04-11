import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Login from "./components/Login";
import SignUp from "./components/Signup";
import Welcome from "./components/Welcome";
import ForgotPassword from "./components/ForgotPassword";
import ProfilePage from "./components/ProfilePage";
import ContactUs from "./components/ContactUs";
import TextEditor from "./components/TextEditor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
    return ( <
        Router >
        <
        div className = "d-flex flex-column min-vh-100" >
        <
        Navbar / >
        <
        main className = "flex-grow-1" >
        <
        Switch >
        <
        Route path = "/"
        component = { Welcome }
        exact / >
        <
        Route path = "/signin"
        component = { Login }
        /> <
        Route path = "/signup"
        component = { SignUp }
        /> <
        Route path = "/forgotpassword"
        component = { ForgotPassword }
        /> <
        Route path = "/pfp"
        component = { ProfilePage }
        /> <
        Route path = "/contactus"
        component = { ContactUs }
        /> <
        Route path = "/editor"
        component = { TextEditor }
        /> <
        Route path = "/about"
        component = { AboutUs }
        /> <
        /Switch> <
        /main> <
        Footer / >
        <
        /div> <
        /Router>
    );
}

export default App;