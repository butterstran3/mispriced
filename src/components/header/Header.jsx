import React from "react";
import "./header.css";

const Header = ({title, subtitle}) => {
    return (
        <div className="header_container">
            <div className="header_inner">
                <div className="header_content">
                    <h1 className="header_title">{title}</h1>
                    <p className="header_subtitle">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;