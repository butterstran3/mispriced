import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/logo.svg";
import {BsInstagram} from 'react-icons/bs';
import {BsDiscord} from 'react-icons/bs';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="footer_container">
           <div className="footer_inner"> 
                <div className="footer_content">
                    <div className="icon_column">
                        <Link to="/">
                            <img className="footer_logo" alt="logo" src={logo} onClick={scrollToTop}/>
                        </Link>
                        <div className="icons_container">
                            <p>© 2023 Mispriced</p>
                            <div className="socials_container">
                                <a href="https://www.instagram.com/mispriced.io/" className="social_link"><BsInstagram className="social_link"/></a>
                                <a href="https://discord.gg/VR3ncXNzG6" className="social_link"><BsDiscord className="social_link"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer_pages">
                        <div className="product_column">
                            <p>Product</p>
                            <Link className="footer_link" to="/racing" onClick={scrollToTop}>Racing</Link>
                            <Link className="footer_link" to="/nba" onClick={scrollToTop}>NBA</Link>
                            <Link className="footer_link" to="howItWorks" onClick={scrollToTop}>How it works</Link>
                            <Link className="footer_link" to="/services" onClick={scrollToTop}>Other services</Link>
                        </div>
                        <div className="company_column">
                            <p>Company</p>
                            <Link className="footer_link" to="/company" onClick={scrollToTop}>About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;