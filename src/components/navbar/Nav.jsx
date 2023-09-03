import { React, useState, useEffect } from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";

const Nav = () => {

    const [mobileActive, setMobileActive] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    useEffect(() => {
        const checkIsPhone = () => {
            if (window.innerWidth <= 1024) {
                setMobileActive(true);
            } else {
                setMobileActive(false);
            }
        };

        checkIsPhone();
        window.addEventListener('resize', checkIsPhone);
        
        return () => {
            window.removeEventListener('resize', checkIsPhone);
        };
    }, []);

    if (mobileActive && !mobileNav) {
        return (
            <nav className="mobile_container">
                <div className="mobile_contents">
                    <NavLink to="/">
                        <img alt="logo" className="mobile_logo" src={logo}/>
                    </NavLink>
                    <button className="modal_btn"><img className="modal_btn" src={menu}></img></button>
                </div>
            </nav>
        )
    } else {
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
                        <Link className="nav_btn btn">Try Mispriced for free</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;