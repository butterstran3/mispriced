import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/logo.svg";
import {BsInstagram} from 'react-icons/bs';
import {BsDiscord} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_content">
                <div className="icon_column">
                    <Link to="/">
                        <img className="footer_logo" alt="logo" src={logo}/>
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
                        <Link className="footer_link" to="/pricing">Pricing</Link>
                        <Link className="footer_link" to="howItWorks">How it works</Link>
                        <Link className="footer_link" to="/services">Other services</Link>
                    </div>
                    <div className="company_column">
                        <p>Company</p>
                        <Link className="footer_link" to="/company">About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;