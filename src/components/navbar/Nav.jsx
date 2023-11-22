import React from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaChevronDown } from "react-icons/fa"; 

const Nav = () => {

    const toggle = () => {
        let button = document.querySelector(".hamburger")
        button.classList.toggle("open")
        let menu = document.querySelector(".mobile_contents")
        menu.classList.toggle("open")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const clickHome = () => {
        let button = document.querySelector(".hamburger")
        button.classList.remove("open")
        let menu = document.querySelector(".mobile_contents")
        menu.classList.remove("open")
    }

    return (
        <nav className="container">
            <div className="nav_inner">
                <div className="nav_container">
                    <div className="nav_logo">
                        <NavLink to="/">
                            <img alt="logo" className="logo" src={logo} onClick={clickHome}/>
                        </NavLink>
                    </div>
                    <div className="nav_contents">
                        <div className="dropdown">
                            <button className="dropbtn nav_content">
                                Pricing
                                <FaChevronDown className="dropdown_arrow"/>
                            </button>
                            <div className="dropdown_content">
                                <NavLink to="/racing">Racing</NavLink>
                                <NavLink to="/nba">NBA</NavLink>
                            </div>
                        </div>
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
                            <NavLink className="mobile_content" to="/racing" onClick={toggle}>Racing</NavLink>
                            <NavLink className="mobile_content" to="/nba" onClick={toggle}>NBA</NavLink>
                            <NavLink className="mobile_content" to="/howItWorks" onClick={toggle}>How it works</NavLink>
                            <Link className="mobile_btn btn" onClick={toggle}>Try Mispriced for free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;