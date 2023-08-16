import React, { useEffect } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Nav = () => {

    return (
        <nav className="container">
            <div className="nav_container">
                <div className="nav_logo">
                    <NavLink to="/">
                        <img alt="logo" className="logo" src={logo}/>
                    </NavLink>
                </div>
                <div className="nav_contents">
                    <NavLink className="nav_content">Pricing</NavLink>
                    <NavLink className="nav_content">How it works</NavLink>
                    <NavLink className="nav_content btn">Try Mispriced for free</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav;