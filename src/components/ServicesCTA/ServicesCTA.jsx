import React from "react";
import "./servicesCTA.css";

const servicesCTA = () => {
    return (
        <div className="servicesCTA_container">
            <div className="servicesCTA_content">
                <div className="CTA_container">
                    <h1>Interested in our other services?</h1>
                    <p>
                        Get in touch with our friendly team to enquire.
                    </p>
                </div>
                <button className="CTA_btn btn">Contact us here</button>
            </div>
        </div>
    )
}

export default servicesCTA;