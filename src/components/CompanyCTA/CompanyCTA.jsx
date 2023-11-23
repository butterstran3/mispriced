import React from "react";
import { Link } from "react-router-dom";
import "./companyCTA.css";

const CompanyCTA = () => {
    return (
        <div className="companyCTA_container">
            <div className="companyCTA_inner">
                <div className="companyCTA_content">
                    <div className="CTA_container">
                        <h1>Take the leap now!</h1>
                        <p>
                            Join our exclusive discord server now to start beating the bookies today! Don’t settle for guesswork when you can rely on proven results.
                        </p>
                    </div>
                    <Link className="CTA_btn btn" to="https://discord.gg/VR3ncXNzG6">Try Mispriced now</Link>
                </div>
            </div>
        </div>
    )
}

export default CompanyCTA;