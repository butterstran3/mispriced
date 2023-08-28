import React from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";
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
                    <NavLink className="nav_content" to="/pricing">Pricing</NavLink>
                    <NavLink className="nav_content">How it works</NavLink>
                    <Link className="nav_btn btn">Try Mispriced for free</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;