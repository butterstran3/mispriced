import React from "react";
import { Link } from "react-router-dom";
import "./joinCTA.css";

const JoinCTA = () => {
    return (
        <div className="joinCTA_container">
            <div className="joinCTA_inner">
                <div className="joinCTA_content">
                    <div className="CTA_container">
                        <h1>Still unsure?</h1>
                        <p>
                            Head over to our discord to find out more in our NBA section on how we remain profitable year on year. 
                            If you've got any questions, feel free to contact us through discord or  
                            email <a className="email_link" href="mailto:contact@mispriced.io">here</a> and we’ll go from there!
                        </p>
                    </div>
                    <Link className="CTA_btn btn" to="https://discord.gg/VR3ncXNzG6">Join Now</Link>
                </div>
            </div>
        </div>
    )
}

export default JoinCTA;