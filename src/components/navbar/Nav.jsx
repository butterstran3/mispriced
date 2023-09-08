import React from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Nav = () => {

    const toggle = () => {
        let button = document.querySelector(".hamburger")
        button.classList.toggle("open")
        let menu = document.querySelector(".mobile_contents")
        menu.classList.toggle("open")
    };

    return (
        <nav className="container">
            <div className="nav_container">
                <div className="nav_logo">
                    <NavLink to="/">
                        <img alt="logo" className="logo" src={logo}/>
                    </NavLink>
                </div>
                <div className="nav_contents">
                    <NavLink className="nav_content" to="/pricing">Pricing</NavLink>
                    <NavLink className="nav_content" to="/howItWorks">How it works</NavLink>
                    <Link className="nav_btn btn" to="https://launchpass.com/mispriced/free-trial">Try Mispriced for free</Link>
                </div>
                <div className="mobile_menu">
                    <div className="hamburger" onClick={toggle}>
                        <div className="bar_1"></div>
                        <div className="bar_2"></div>
                        <div className="bar_3"></div>
                    </div>
                    <div className="mobile_contents">
                        <NavLink className="mobile_content" to="/pricing" onClick={toggle}>Pricing</NavLink>
                        <NavLink className="mobile_content" to="/howItWorks" onClick={toggle}>How it works</NavLink>
                        <Link className="mobile_btn btn" onClick={toggle}>Try Mispriced for free</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;